---
sidebar_position: 1
title: Installation
---

## Installing the package

```bash npm2yarn
npm install @frost-orm/frost-web-client
npm install --save-dev @frost-orm/cli 
```

## Setup

- Define the database schema and put the schema in the correct location (or specify the location in package.json), for [more detailed guide](./define-schema.mdx).
- Generate the code from the schema by using the `generate` command in the frost cli, for [more detailed guide](./generate-the-implementation).
- Pass the firebase configuration object to [Frost.initialize](../../api/classes/Frost#initialize) function instead of `initializeApp` function from firebase.
- This will initialize the Firebase Instance and Frost Instance along with the APIs(Delegates) for each model.
- The initialize function will return an object with the properties:
  - firebaseApp: The instance returned by `initializeApp` function from Firebase Web SDK 9.
  - firebaseDB: The instance returned by `getDatabase` function from Firebase Web SDK 9.
  - [name of the model (lower case)]: corresponding API(Delegate) instance.
  
:::caution
Frost uses Firebase Web SDK 9 internally. So the Firebase app instance is a SDK 9 instance.
:::

```typescript title="src/database/frost.ts"
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  messagingSenderId: "...",
  appId: "...",
  ...
};

export const FrostApp = Frost.initialize(firebaseConfig)

//highlight-start
/**
 * Shape of FrostApp
 * {
 *  firebaseApp: FirebaseApp,
 *  user, // from `model User {...}`
 *  post, // from `model Post {...}`
 *  course, // and so on
 *  profile,
 * }
 * /
//highlight-end

```

To access the Firebase App Instance or the APIs Instances

```ts
import {FrostApp} from "src/database/frost.ts"
FrostApp.firebaseApp
FrostApp.firebaseDB

FrostApp.user
FrostApp.post
FrostApp.course
FrostApp.profile
```

or you can export each api individually

```ts title="src/database/frost.ts"
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  messagingSenderId: "...",
  appId: "...",
  ...
};

const FrostApp = Frost.initialize(firebaseConfig)
export {
  FrostApp.user  as UsersApi,
  FrostApp.post  as PostsApi,
  FrostApp.course  as CoursesApi,
  FrostApp.profile  as ProfilesApi,
}
```
