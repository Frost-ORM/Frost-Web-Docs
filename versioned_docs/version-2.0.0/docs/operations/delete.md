---
sidebar_position: 4
---

# Delete

## Node Removal

To Simply delete an instance relations:

- Pass the object (***or at least an object containing the id of the instance you want to delete, ie `{ id: '...' }`***) you want to delete to [FrostDelegate.delete()](../../api/classes/FrostDelegate#delete).
- The second parameter is [DisconnectOptions](../../api/types/DisconnectOptions). It defaults to `"all"`, So it disconnects all relations unless you supply an empty map `{}` or a specific map you require. for more details Check the [Disconnect](#disconnect) Section

```ts title=src/index.ts
import { User } from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

...

const { id: userId } = (await FrostApp.user.delete(user))
```

## Disconnect

This is similar to [`Disconnect`](./update#disconnect) in the [`Update`](./update) Section. So you don't have to re-read it if you're already familiar with it. The only difference is that here it defaults to `"all"`

To Specify the relations you want to disconnect along with the delete, all you have to do is:

- When you pass the instance to the delete function, pass a second parameter of the type [DisconnectOptions](../../api/types/DisconnectOptions)
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
***Reminder:*** The second parameter (disconnect options) defaults to `"all"`
:::

:::info
Each model will have a lot of types generated automatically for it. `DisconnectOptions` is One of these Types. These Type are named with the following pattern `{ModelName}Type`, so for the example bellow the connect options type will be `UserDisconnectOptions`.
for more details about these types checkout this [page](../extra/detailed-data-types.mdx)
:::

```ts title=src/index.ts showLineNumbers
import { User, Profile, Post} from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

const user = {id:userId}

//highlight-start
// Example 1: this will disconnect all relations
await FrostApp.user.delete(user)
//Or
await FrostApp.user.delete(user,"all")

// Example 2: this will disconnect nothing
await FrostApp.user.delete(user,{})

// Example 3: this will disconnect all posts and profiles
await FrostApp.user.delete(user,{ posts: "all", profile: true})

// Example 4: this will disconnect the specific posts in the list and the single profile
await FrostApp.user.delete(user,{ posts: ["...","...",...], profile: "..."})
//highlight-end

```
