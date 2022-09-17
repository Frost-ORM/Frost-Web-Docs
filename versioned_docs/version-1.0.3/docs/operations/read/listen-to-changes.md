---
sidebar_position: 2
---

# Listen to changes

## Include

Just Like [Include](./once#include) in Read Data Once

## ListenToNestedChanges

This [ListenToNestedChanges](../../../api/types/ListenToNestedChanges) Options Parameter determines which types of relations will be Observed.
Possible Values:

- `Boolean`:
  - `true` will not listen to changes in included related instances
  - `false` will not listen to changes in included related instances
- Map of `{ [RelationType]: boolean }`, so  you can choose to listen to a specific type of relation.

Let's Say you're observing a `user` instance with connected profile and posts

 ```json
//  Example 1: listen to all changes
 true

//  Example 2: listen to all changes in One to One only
{
    RelationTypes.ONE_TO_ONE:true,
    RelationTypes.ONE_TO_MANY:false,
    RelationTypes.MANY_TO_MANY:false,
}
 ```

:::danger
Be careful in case of Many to Many, each nested child will use an observer to the server. Firebase has constraints on the number of active connections especially in the free tier.

Also Be careful in case of listening to nested changes in case of queries, if the query returns a long list then each item of the list will have observer on included relations if they're enabled through [ListenToNestedChanges](../../../api/types/ListenToNestedChanges). Listening to original queries is not a problem but too many sub-queries may increase database costs.
:::

## Observe One

This Similar to [Fetch One](./once#fetch-one) but with an extra third argument [ListenToNestedChanges](#listentonestedchanges)
To Observe a single instance:

- Pass the instance ID to the first argument of [FrostApi.observeOne](../../../api/classes/FrostApi#observeone)
- The second argument is an [Include](#include) Array
- The third argument is an [ListenToNestedChanges](#ListenToNestedChanges). ***defaults to `false`***

```typescript
userApi.observeOne(
    '-N80Y3gwS6TLcTC6Q-vF',
    ['profile','posts'],
    {
        RelationTypes.ONE_TO_ONE:true,
        RelationTypes.ONE_TO_MANY:false,
        RelationTypes.MANY_TO_MANY:false,
    }
).subscribe(
    (user:User) => {
        // to get profile 
        let userProfile = user.profile?.()
        let userPosts = user.posts?.()

        // to get a flat object
        let data = user.flatten()
    }
)


```

## Observe Query (Multiple)

This Similar to [Query Multiple](./once#query-multiple) but with extra options in the first argument
To preform a Query:

- Use the [FrostApi.observeMany](../../../api/classes/FrostApi#observemany) function:
  - The first argument is an options object:
    - `include`: pass the [Include](#include) array
    - `listenToNestedChanges`: pass the [ListenToNestedChanges](#listentonestedchanges). ***defaults to `false`***
    - `debounceDuration`:
      - Debounce Duration in Milliseconds. incase multiple changes happen to multiple sub-queries in short time, this will prevent the observable from emitting too many times.
      - optional defaults to `500ms`
  - The second argument is a rest (spread) argument representing the firebase [Query Constraints](https://firebase.google.com/docs/reference/js/database.queryconstraint). These are exactly the parameters that should be passed to the [query](https://firebase.google.com/docs/reference/js/database.md#query) firebase function
    - ***If no query constraints are passed then It will fetch all subnodes.***

```typescript
// Example 1: observe all users with no nested observing
userApi.observeMany(null).subscribe(
    (users: User[])=>{
        ...
    }
)

// Example 2: observe all users and observe users posts
userApi.observeMany({ include: ['posts'],listenToNestedChanges:true }).subscribe(
    (users: User[])=>{
        ...
    }
)

//Example 3: observe all users with the type "CUSTOMER" with their posts also observed (for custom queries like this you should add an index manually to improve performance and reduce costs)
userApi.observeMany(

    { 
        include: ['posts'],
        listenToNestedChanges:true
    },
    orderByChild("userType"),
    equalTo("CUSTOMER"),

).subscribe(
    (users: User[])=>{
        ...
    }
)
```
