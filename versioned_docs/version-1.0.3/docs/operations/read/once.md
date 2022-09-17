---
sidebar_position: 1
---

# Read Data Once

## Include

Since Frost Focuses on simplifying the relations, it provides the option to fetch related instances along with the instance you originally want to fetch.
This were the [Include](../../../api/types/Include) Parameter comes in.

[Include](../../../api/types/Include) Parameter is an array of the properties names (with [Relation](../../../api/decorators/Relation) decorator) that you want to fetch.

```typescript
// for example when fetching a user with it's profile and posts the Include array would be
["profile","posts"]

```

## Fetch One

To Fetch a single instance:

- Pass the instance ID to the first argument of [FrostApi.findOne](../../../api/classes/FrostApi#findone)
- The second argument is an [Include](#include) Array

```typescript
let user = await userApi.findOne('-N80Y3gwS6TLcTC6Q-vF',['profile','posts'])

// to get profile 
let userProfile = user.profile?.()
let userPosts = user.posts?.()

// to get a flat object
let data = user.flatten()
```

## Query Multiple

To preform a Query:

- Use the [FrostApi.findMany](../../../api/classes/FrostApi#findmany) function:
  - The first argument is an options object:
    - `include`: pass the [Include](#include) array as a named parameter in the options Object
  - The second argument is a rest (spread) argument representing the firebase [Query Constraints](https://firebase.google.com/docs/reference/js/database.queryconstraint). These are exactly the parameters that should be passed to the [query](https://firebase.google.com/docs/reference/js/database.md#query) firebase function
    - ***If no query constraints are passed then It will fetch all subnodes.***

```typescript
// Example 1: get all users
let users = await userApi.findMany(null)

// Example 2: get all users with posts
let users = await userApi.findMany({ include: ['posts'] })

//Example 3: get all users with the type "CUSTOMER" with their posts (for custom queries like this you should add an index manually to improve performance and reduce costs)
let users = await userApi.findMany({ include: ['posts'] },orderByChild("userType"),equalTo("CUSTOMER"))
```
