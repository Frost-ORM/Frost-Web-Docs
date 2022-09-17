---
sidebar_position: 2
---

# Listen to changes

## IncludeOptions

Just Like [IncludeOptions](./once#includeoptions) in Read Data Once

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

- Pass the instance ID to the first argument of [FrostDelegate.observeOne](../../../api/classes/FrostDelegate#observeone)
- The second argument is an [IncludeOptions](#includeoptions) map
- The third argument is an [ListenToNestedChanges](#listentonestedchanges). ***defaults to `false`***

```typescript
FrostApp.user.observeOne(
    '-N80Y3gwS6TLcTC6Q-vF',
    { "posts":true, "profile":true },
    {
        RelationTypes.ONE_TO_ONE:true,
        RelationTypes.ONE_TO_MANY:false,
        RelationTypes.MANY_TO_MANY:false,
    }
).subscribe(
    (user) => {
        // to access profile 
        let userProfile = user.profile
        // to access posts 
        let userPosts = user.posts
    }
)


```

## Observe Multiple

This Similar to [Fetch Multiple](./once#fetch-multiple) but with extra options in the second argument
To preform a Query:

- Use the [FrostDelegate.observeMultiple](../../../api/classes/FrostDelegate#observemultiple) function:
  - Pass the nodes IDs you want to fetch to the first argument of [FrostDelegate.observeMultiple](../../../api/classes/FrostDelegate#findmultiple)
  - The second argument is an options object:
    - `include`: pass the [IncludeOptions](#includeoptions) map
    - `listenToNestedChanges`: pass the [ListenToNestedChanges](#listentonestedchanges). ***defaults to `false`***
- Returns a map `{[node_key]: node_value}`
  
```typescript
// Example 1: observe the three users with no nested observing
FrostApp
.user
.observeMultiple(
    ['-N80Y3gwS6TLcTC6Q-vF','-N81Y3gwS6TLcTC1K-cB','-N82Y3gwS6TLcTC5Q-rA'],
    { 
        include:{"profile":true,"posts":true},
    }
).subscribe(
    (users)=>{
        ...
    }
)

// Example 2: observe the three users and fetch users posts and profile without observing the posts and profiles
FrostApp
.user
.observeMultiple(
    ['-N80Y3gwS6TLcTC6Q-vF','-N81Y3gwS6TLcTC1K-cB','-N82Y3gwS6TLcTC5Q-rA'],
    { 
        include:{"profile":true,"posts":true},
        // listenToNestedChanges:false // you can add it manually for better readability 
                                       // but you don't have to since it defaults to false anyways
    }
).subscribe(
    (users)=>{
        ...
    }
)

// Example 3: observe the three users and observe users posts and profile
FrostApp
.user
.observeMultiple(
    ['-N80Y3gwS6TLcTC6Q-vF','-N81Y3gwS6TLcTC1K-cB','-N82Y3gwS6TLcTC5Q-rA'],
    { 
        include:{"profile":true,"posts":true},
        listenToNestedChanges:true
    }
).subscribe(
    (users)=>{
        ...
    }
)

```

## Observe Query

This Similar to [Query Many](./once#query-many) but with extra options in the first argument
To preform a Query:

- Use the [FrostDelegate.observeMany](../../../api/classes/FrostDelegate#observemany) function:
  - The first argument is an options object:
    - `include`: pass the [IncludeOptions](#includeoptions) map
    - `listenToNestedChanges`: pass the [ListenToNestedChanges](#listentonestedchanges). ***defaults to `false`***
    - `debounceDuration`:
      - Debounce Duration in Milliseconds. incase multiple changes happen to multiple sub-queries in short time, this will prevent the observable from emitting too many times.
      - optional defaults to `500ms`
  - The second argument is a rest (spread) argument representing the firebase [Query Constraints](https://firebase.google.com/docs/reference/js/database.queryconstraint). These are exactly the parameters that should be passed to the [query](https://firebase.google.com/docs/reference/js/database.md#query) firebase function
    - ***If no query constraints are passed then It will fetch all subnodes.***
- Returns a map `{[node_key]: node_value}`
  
```typescript
// Example 1: observe all users with no nested observing
FrostApp.user.observeMany(null).subscribe(
    (users)=>{
        ...
    }
)

// Example 2: observe all users and observe users posts
FrostApp.user.observeMany({ include: { "posts":true },listenToNestedChanges:true }).subscribe(
    (users)=>{
        ...
    }
)

//Example 3: observe all users with the type "CUSTOMER" with their posts also observed (for custom queries like this you should add an index manually to improve performance and reduce costs)
FrostApp.user.observeMany(

    { 
        include: { "posts":true },
        listenToNestedChanges:true
    },
    orderByChild("userType"),
    equalTo("CUSTOMER"),

).subscribe(
    (users)=>{
        ...
    }
)
```
