---
sidebar_position: 5
---

# Multiple Location Write

- For Every function in [FrostApi](/api/classes/FrostApi) that modifies the database ([add](/api/classes/FrostApi#add), [update](/api/classes/FrostApi#update), [delete](/api/classes/FrostApi#delete)) we have an equivalent `getMap` function.
- The equivalent `getMap` function returns an extra property (`map`) to the returned map from it's equivalent operation function (ie; `add` returns `{ id }` ,`getAddMap` returns `{ id, map }`). This map contains the update map that should be passed to the firebase [update](https://firebase.google.com/docs/reference/js/database#update) function.
- This allows us to utilize the [multiple location writes](https://firebase.blog/posts/2015/09/introducing-multi-location-updates-and_86) feature in the firebaseDB.
- All you have to do is preform multiple operations and join the all of the maps and pass the joined map to the firebaseDB [update](https://firebase.google.com/docs/reference/js/database#update) function

|Immediate operation| Equivalent `getMap` function|
| ----------------- | --------------------------- |
| [add](/api/classes/FrostApi#add)| [getAddMap](/api/classes/FrostApi#getAddMap) |
| [update](/api/classes/FrostApi#update)| [getUpdateMap](/api/classes/FrostApi#getUpdateMap) |
| [delete](/api/classes/FrostApi#delete)| [getDeleteMap](/api/classes/FrostApi#getDeleteMap) |

## Limitations

- Firebase has a small limitation in Multi-Location writes, you can't have an update to a node and another separate update to a child of that node (ie; two updates to the same location with different paths).

- In the example below:
  - `Lines 8-21`: These lines will throw an error because the final update map will have the path to set the `user` node, And each `post` add will also result in a update path inside that same user node (in order to connect them by setting ID values in the user node.)
  - `Lines 24-36`: To overcome the problem in the first example, we can preform the adding of the user (either by passing the `UserAddMap` to the update function or by replacing the `getAddMap` wit `add`). After That you can preform the adding of multiple posts. This way the final map won't have the path to the user node, So all the update paths from the posts connection to the user won't interfere with it.

:::info
In later versions, Frost will provide utilities to resolve the conflicts in the firebase update map.
:::

```ts title=src/index.ts showLineNumbers
import { User } from "src/data/user"
import { Post } from "src/data/Post"
import { FrostApp } from "src/data/frost"
import { update } from "firebase/database";

const user = new User({...})

//highlight-error-start
const { id: userId, map: addUserMap } = (await FrostApp.users.getAddMap(user))


const post_1 = new Post({...})
const post_2 = new Post({...})

const {id:postId_1, map: addPostMap_1} = await FrostApp.posts.getAddMap(post_1,{'user':userId})
const {id:postId_2, map: addPostMap_2} = await FrostApp.posts.getAddMap(post_2,{'user':userId})

await update({
  ...addUserMap,
  ...addPostMap_1,
  ...addPostMap_2,
})
//highlight-error-end

//This the correct way to do it
//highlight-correct-start
const { id: userId } = (await FrostApp.users.add(user))


const post_1 = new Post({...})
const post_2 = new Post({...})

const {id:postId_1, map: addPostMap_1} = await FrostApp.posts.getAddMap(post_1,{'user':userId})
const {id:postId_2, map: addPostMap_2} = await FrostApp.posts.getAddMap(post_2,{'user':userId})

await update({
  ...addPostMap_1,
  ...addPostMap_2,
})
//highlight-correct-end

```
