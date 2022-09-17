---
sidebar_position: 3
title: Update
---

This section will describe [FrostDelegate.update()](../../api/classes/FrostDelegate#update) function. This Function is used to modify an existing instance of the entity and connect or disconnect it with other entities depending on the relations.

## Data Modification

To Simply Modify an instance, all you have to do is:

- As in `line 8` Pass the object containing the modified properties and ***id of the object you want to modify*** to the `update` function in the corresponding Delegate from the FrostApp instance (in this case the FrostApp has the shape `{firebaseApp:FirebaseApp,firebaseDB:Database, user:UserDelegate, profile:ProfileDelegate}`)
- The update function returns a `Promise<void>` in case of success and throws an error in case of failure.

```ts title=src/index.ts showLineNumbers
import { User, Profile, Post} from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

// modify the parameters as you like. here we'll modify the name property
const modifiedUserProps = {id:userId, name:"..."}

// update the instance
await FrostApp.user.update(modifiedUserProps)
```

## Connect

It's Just like the [connect](./write#connect) in [Write Operation](./write#connect)

To Simply connect an instance it to other instances based on the relations, all you have to do is: (We'll continue with the same example from above)

- As in `line 8`, when you pass the data to the update function, you can also pass a second parameter of the type [ConnectOptions](../../api/types/ConnectOptions)
  - The connect option is basically a map between the <br/> `{ [property name with the relation you want to connect] : (id of the instance(s) you want to connect) }`.

:::info
Each model will have a lot of types generated automatically for it. `ConnectOptions` is One of these Types. These Type are named with the following pattern `{ModelName}Type`, so for the example bellow the connect options type will be `UserConnectOptions`.
for more details about these types checkout this [page](../extra/detailed-data-types.mdx)
:::

***In the example below, we connect a list of `posts` using their IDs and also connect a `profile` to the `user` instance.***

```ts title=src/index.ts showLineNumbers
import { User, Profile, Post} from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

// modify the parameters as you like. here we'll modify the name property
const modifiedUserProps = {id:userId, name:"..."}

// update the instance
await FrostApp.user.update(modifiedUserProps,{ posts: ["...","...",...], profile: "..."})
```

## Disconnect

This is similar to `Connect` in the structure but the opposite in the functionality, it disconnects related instances.

To Simply disconnect relations, all you have to do is: (We'll continue with the same example from above)

- When you pass the data to the update function, you can also pass a third parameter of the type [DisconnectOptions](../../api/types/DisconnectOptions)
  - The possible values for [DisconnectOptions](../../api/types/DisconnectOptions) are:
  - The string `"all"`, this will disconnect all relations
  - A map between:
    - `[property name with the relation you want to connect]`
    - and one of the following options:
    - The string `"all"` or the boolean `true` to disconnect all connected instances in the selected relations (e.g: `{ posts: 'all', profile: true }`)
    - ID(s) of the instance(s) you want to disconnect (e.g: `{ posts: ['...','...',...], profile: "..." }`)
  
:::caution
If the property name in the [DisconnectOptions](../../api/types/DisconnectOptions) map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string.

Please check out [DisconnectOptions](../../api/types/DisconnectOptions), it contains more detailed examples.
:::  

:::info
If you don't have anything to connect and you just want to disconnect relations the second parameter (ie; ConnectOptions) could be passed as `undefined` or an empty object `{}`
:::

:::info
Each model will have a lot of types generated automatically for it. `DisconnectOptions` is One of these Types. These Type are named with the following pattern `{ModelName}Type`, so for the example bellow the connect options type will be `UserDisconnectOptions`.
for more details about these types checkout this [page](../extra/detailed-data-types.mdx)
:::

```ts title=src/index.ts showLineNumbers
import { User, Profile, Post} from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

// modify the parameters as you like. here we'll modify the name property
const modifiedUserProps = {id:userId, name:"..."}


//highlight-start
// Example 1: this will disconnect all relations
await FrostApp.user.update(modifiedUserProps,undefined,"all")

// Example 2: this will disconnect all posts and profiles
await FrostApp.user.update(modifiedUserProps,undefined,{ posts: "all", profile: true})

// Example 3: this will disconnect the specific posts in the list and the single profile
await FrostApp.user.update(modifiedUserProps,undefined,{ posts: ["...","...",...], profile: "..."})
//highlight-end

```
