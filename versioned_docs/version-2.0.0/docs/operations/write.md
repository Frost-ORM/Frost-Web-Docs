---
sidebar_position: 2
title: Write (Add/Insert)
---

This section will describe [FrostDelegate.add()](../../api/classes/FrostDelegate#add) function. This Function is used to push a new instance of the entity to the entity list and connect it with other entities depending on the relations.

## Regular Data Insert

To Simply Add a new instance, all you have to do is:

- As in `line 6` Pass object containing the Model data to the `add` function in the corresponding Delegate from the FrostApp instance (in this case the FrostApp has the shape `{firebaseApp:FirebaseApp, firebaseDB:Database, user:UserDelegate, profile:ProfileDelegate}`)
- The add function returns an object with the shape `{id:string}`, the `id` is the id of the newly created instance

:::info
if you want the instance to have a specific id, then set it in the object instance before passing it to the add function. otherwise the id will be the id returned from the firebase [`push`](https://firebase.google.com/docs/reference/js/database#push) function.
:::

```ts title=src/index.ts showLineNumbers
import { FrostApp } from "src/data/frost"
import { User } from "@frost-orm/frost-web-client"

const user: User = {...}

const { id } = (await FrostApp.user.add(user))
```

## Connect

To Simply Add a new instance and also connect it to other instances based on the relations, all you have to do is: (We'll continue with the same example from above)

- As in `line 10`, when you pass the data to the add function, you can also pass a second parameter of the type [ConnectOptions](../../api/types/ConnectOptions)
  - The connect option is basically a map between the <br/> `{ [property name with the relation you want to connect] : (id of the instance(s) you want to connect) }`.

:::info
Each model will have a lot of types generated automatically for it. `ConnectOptions` is One of these Types. These Type are named with the following pattern `{ModelName}Type`, so for the example bellow the connect options type will be `UserConnectOptions`.
for more details about these types checkout this [page](../extra/detailed-data-types.mdx)
:::

:::caution
If the property name in the [ConnectOptions](../../api/types/ConnectOptions) map is referring to a property with an array type (ie; many). then the value should be an array of the ids. otherwise (ie; One) then the value can be a single string.
:::

***In the example below, we create and add the user, then we create the profile for the user and when we add it we pass the `userId` in the ConnectOptions in the second parameter***

```ts title=src/index.ts showLineNumbers
import { User, Profile } from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"

const userData: User = {...}

const { id: userId } = (await FrostApp.user.add(userData))

//highlight-start
const profile: Profile = {...}

const {id:profileId} = await FrostApp.profile.add(profile,{'user':userId})
//highlight-end
```
