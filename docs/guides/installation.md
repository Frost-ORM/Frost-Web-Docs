---
sidebar_position: 1
title: Installation
---

## Installing the package

```bash npm2yarn
npm install @frost-orm/frost-web
```

## Setup

- Pass the firebase configuration object to [Frost.initialize](/api/classes/Frost#initialize) function instead of `initializeApp` function from firebase.
- Pass a map of the APIs you've defined (this explained in [Create A Node](/docs/fundamentals/create-a-node) section) as the second parameter. the key for each API should be the name that you want to access it by later on.
- This will initialize the Firebase Instance and Frost Instance along with the APIs.
- The initialize function will return an object with the properties:
  - firebaseApp: The instance returned by `initializeApp` function from Firebase Web SDK 9.
  - [keys used in the second parameter]: corresponding API instance.
  
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

export const FrostApp = Frost.initialize(firebaseConfig,{
  "users":UserApi,
  "posts":PostApi,
  "courses":CourseApi,
  "profiles":ProfileApi,
})

//highlight-start
/**
 * Shape of FrostApp
 * {
 *  firebaseApp: FirebaseApp,
 *  users: UserApi,
 *  posts: PostApi,
 *  courses: CourseApi,
 *  profiles: ProfileApi,
 * }
 * /
//highlight-end

```

To access the Firebase App Instance or the APIs Instances

```ts
import {FrostApp} from "src/database/frost.ts"
FrostApp.firebaseApp

FrostApp.users
FrostApp.posts
FrostApp.courses
FrostApp.profiles
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

const FrostApp = Frost.initialize(firebaseConfig,{
  "users":UserApi,
  "posts":PostApi,
  "courses":CourseApi,
  "profiles":ProfileApi,
})
export {
  FrostApp.users as UserApi,
  FrostApp.posts as PostApi,
  FrostApp.courses as CourseApi,
  FrostApp.profiles as ProfileApi,
}
```
