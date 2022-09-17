---
sidebar_position: 5
---

# Multiple Location Write

- For Every function in [FrostDelegate](../../api/classes/FrostDelegate) that modifies the database ([add](../../api/classes/FrostDelegate#add), [update](../../api/classes/FrostDelegate#update), [delete](../../api/classes/FrostDelegate#delete)) we have an equivalent `getMap` function.
- The equivalent `getMap` function returns an extra property (`map`) to the returned map from it's equivalent operation function (ie; `add` returns `{ id }` ,`getAddMap` returns `{ id, map }`). This map contains the update map that should be passed to the firebase [update](https://firebase.google.com/docs/reference/js/database#update) function.
- This allows us to utilize the [multiple location writes](https://firebase.blog/posts/2015/09/introducing-multi-location-updates-and_86) feature in the firebaseDB.
- All you have to do is preform multiple operations and join the all of the maps and pass the joined map to the firebaseDB [update](https://firebase.google.com/docs/reference/js/database#update) function

|Immediate operation| Equivalent `getMap` function|
| ----------------- | --------------------------- |
| [add](../../api/classes/FrostDelegate#add)| [getAddMap](../../api/classes/FrostDelegate#getAddMap) |
| [update](../../api/classes/FrostDelegate#update)| [getUpdateMap](../../api/classes/FrostDelegate#getUpdateMap) |
| [delete](../../api/classes/FrostDelegate#delete)| [getDeleteMap](../../api/classes/FrostDelegate#getDeleteMap) |

:::info
Multiple location write can be very helpful in operating on collections. For example, if you want to delete a list of nodes; then you can achieve that by looping or (using array methods like `map`) on `getDeleteMap` instead of `delete`, then pass the final update map to [update](https://firebase.google.com/docs/reference/js/database#update) firebaseDB function.
:::

## Overcoming Limitations

- Firebase has a small limitation in Multi-Location writes, you can't have an update to a node and another separate update to a child of that node (ie; two updates to the same location with different paths).
- Frost has implemented a piece of code that overcomes this limitation. ***(This is specific to the Codegen versions)***
- In the example below:
  - `Lines 7-20`: These lines should throw an error if you're using plain firebaseSDK because the final update map will have the path to set the `user` node, And each `post` add will also result in a update path inside that same user node (in order to connect them by setting ID values in the user node.). ***But because Frost's goal is to simplify dealing with the database as much as possible; these lines won't throw na error***

```ts title=src/index.ts showLineNumbers
import { User, Post } from "@frost-orm/frost-web-client"
import { FrostApp } from "src/data/frost"
import { update } from "firebase/database";

const user: User = {...}

//highlight-start
const { id: userId, map: addUserMap } = (await FrostApp.user.getAddMap(user))


const post_1: Post= {...}
const post_2: Post = {...}

const {id:postId_1, map: addPostMap_1} = await FrostApp.post.getAddMap(post_1,{'user':userId})
const {id:postId_2, map: addPostMap_2} = await FrostApp.post.getAddMap(post_2,{'user':userId})

await update({
  ...addUserMap,
  ...addPostMap_1,
  ...addPostMap_2,
})
//highlight-end

```
