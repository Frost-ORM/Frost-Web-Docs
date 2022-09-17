---
sidebar_position: 1
---

# Read Data Once

## IncludeOptions

Since Frost Focuses on simplifying the relations, it provides the option to fetch related instances along with the instance you originally want to fetch.
This were the [IncludeOptions](../../../api/types/IncludeOptions) Parameter comes in.

[IncludeOptions](../../../api/types/IncludeOptions) Parameter is a map of the properties names that you want to fetch and the boolean indicating wether or not to include them.

:::info
you don't have to set the properties you don't want to `false` as `undefined` is considered `false`
:::

```json
// for example when fetching a user with it's profile and posts the IncludeOptions map would be
{
  "profile":true,
  "posts":true
}
```

## Fetch One

To Fetch a single instance:

- Pass the instance ID to the first argument of [FrostDelegate.findOne](../../../api/classes/FrostDelegate#findone)
- The second argument is an [IncludeOptions](#includeoptions) map

```typescript
let user = await FrostApp.user.findOne('-N80Y3gwS6TLcTC6Q-vF',{"profile":true,"posts":true})

// to access profile 
let userProfile = user.profile
// to access posts 
let userPosts = user.posts

```

## Fetch Multiple

To Fetch a set of instances:

- Pass the nodes IDs you want to fetch to the first argument of [FrostDelegate.findMultiple](../../../api/classes/FrostDelegate#findmultiple)
- The second argument is an options Object, with the following parameters:
  - `include`: pass the [IncludeOptions](#includeoptions) map as a named parameter in the options Object
- Returns a map `{[node_key]: node_value}`

```typescript
let users = await FrostApp.user.findMultiple(
                                  ['-N80Y3gwS6TLcTC6Q-vF','-N81Y3gwS6TLcTC1K-cB','-N82Y3gwS6TLcTC5Q-rA'],
                                  { include:{"profile":true,"posts":true }}
                                )


```

## Query Many

To preform a Query:

- Use the [FrostDelegate.findMany](../../../api/classes/FrostDelegate#findmany) function:
  - The first argument is an options object:
    - `include`: pass the [IncludeOptions](#includeoptions) map as a named parameter in the options Object
  - The second argument is a rest (spread) argument representing the firebase [Query Constraints](https://firebase.google.com/docs/reference/js/database.queryconstraint). These are exactly the parameters that should be passed to the [query](https://firebase.google.com/docs/reference/js/database.md#query) firebase function
    - ***If no query constraints are passed then It will fetch all subnodes.***
- Returns a map `{[node_key]: node_value}`
- 
```typescript
// Example 1: get all users
let users = await FrostApp.user.findMany(null)

// Example 2: get all users with posts
let users = await FrostApp.user.findMany({ include: {'posts':true} })

//Example 3: get all users with the type "CUSTOMER" with their posts (for custom queries like this you should add an index manually to improve performance and reduce costs)
let users = await FrostApp.user.findMany({ include: {'posts':true}  },orderByChild("userType"),equalTo("CUSTOMER"))
```
