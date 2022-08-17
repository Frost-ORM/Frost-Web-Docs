---
sidebar_position: 3
title: Update
---

This section will describe [FrostApi.update()](/api/classes/FrostApi#update) function. This Function is used to modify an existing instance of the entity and connect or disconnect it with other entities depending on the relations.

## Data Modification

To Simply Modify an instance (after you've fetched it), all you have to do is:

- Modify the parameters you want in the Object instance
- As in `line 12` Pass the modified instance to the `update` function in the corresponding API from the FrostApp instance (in this case the FrostApp has the shape `{firebaseApp:FirebaseApp, users:UserApi, profiles:ProfileApi}`)
- The update function returns a `Promise<void>` in case of success and throws an error in case of failure.

:::warning
The instance passed to the update function must be an instance fetched by frost itself or manually instantiated, but it should contain all the properties (along with frost related properties).
To update a single property use the update function from firebase db. in upcoming versions Frost will add support for updating specific properties
:::

```ts title=src/index.ts showLineNumbers
import { User } from "src/data/user"
import { Profile } from "src/data/profile"
import { Post } from "src/data/post"

import { FrostApp } from "src/data/frost"

const user = (await FrostApp.users.find(userId))

// modify the parameters as you like.
user.name = "..."

// update the instance
await FrostApp.users.update(user)
```

## Connect

It's Just like the [connect](/docs/operations/write#connect) in [Write Operation](/docs/operations/write#connect)

To Simply connect an instance it to other instances based on the relations, all you have to do is: (We'll continue with the same example from above)

- As in `line 12`, when you pass the instance to the update function, you can also pass a second parameter of the type [ConnectOptions](/api/types/ConnectOptions)
  - The connect option is basically a map between the <br/> `{ [property name with the relation you want to connect] : (id of the instance(s) you want to connect) }`.


***In the example below, we connect a list of `posts` using their IDs and also connect a `profile` to the `user` instance.***

```ts title=src/index.ts showLineNumbers
import { User } from "src/data/user"
import { Profile } from "src/data/profile"
import { Post } from "src/data/post"
import { FrostApp } from "src/data/frost"

const user = (await FrostApp.users.find(userId))

// modify the parameters as you like.
user.name = "..."

// update the instance
await FrostApp.users.update(user,{ posts: ["...","...",...], profile: "..."})
```

## Disconnect

This is similar to `Connect` in the structure but the opposite in the functionality, it disconnects related instances.

To Simply disconnect relations, all you have to do is: (We'll continue with the same example from above)

- When you pass the instance to the update function, you can also pass a third parameter of the type [DisconnectOptions](/api/types/DisconnectOptions)
  - The possible values for [DisconnectOptions](/api/types/DisconnectOptions) are:
  - The string `"all"`, this will disconnect all relations
  - A map between:
    - `[property name with the relation you want to connect]`
    - and one of the following options:
    - The string `"all"` or the boolean `true` to disconnect all connected instances in the selected relations (e.g: `{ posts: 'all', profile: true }`)
    - ID(s) of the instance(s) you want to disconnect (e.g: `{ posts: ['...','...',...], profile: "..." }`)
  
:::caution
If the property name in the [DisconnectOptions](/api/types/DisconnectOptions) map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string.

Please check out [DisconnectOptions](/api/types/DisconnectOptions), it contains more detailed examples.
:::  

:::info
If you don't have anything to connect and you just want to disconnect relations the second parameter (ie; ConnectOptions) could be passed as `undefined` or an empty object `{}`
:::

```ts title=src/index.ts showLineNumbers
import { User } from "src/data/user"
import { Profile } from "src/data/profile"
import { Post } from "src/data/post"
import { FrostApp } from "src/data/frost"

const user = (await FrostApp.users.find(userId))

// modify the parameters as you like.
user.name = "..."

//highlight-start
// Example 1: this will disconnect all relations
await FrostApp.users.update(user,undefined,"all")

// Example 2: this will disconnect all posts and profiles
await FrostApp.users.update(user,undefined,{ posts: "all", profile: true})

// Example 3: this will disconnect the specific posts in the list and the single profile
await FrostApp.users.update(user,undefined,{ posts: ["...","...",...], profile: "..."})
//highlight-end

```
