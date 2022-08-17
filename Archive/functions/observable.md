[@frost/frost-web](../modules.md) / [Exports](../modules.md) / observable

# Function: observable

▸ **observable**(`query`, `options?`): `Observable`<`DataSnapshot`\>

**`Example`**

In case of exact node
```ts
let value = observable(
                   child(
                       ref(this.db),
                       `/users/${userId}`,
                   ),
               ).pipe(map(value => value.val()))
```

**`Example`**

In case of a query
```ts
let value = observable(
                   query(
                       ref(this.db, 'users'),
                       orderByChild('type'),
                       equalTo('student'),
                   )
               ).pipe(map(value => value.val()))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `Query` | (Firebase Type) a query object that will be passed to the `onValue` FirebaseDB Function (this gould be returned from child/query functions ) |
| `options?` | `ListenOptions` | (Firebase Type) an object for the listening options on the `onValue` FirebaseDB Function |

#### Returns

`Observable`<`DataSnapshot`\>

an RX observable for the provided query
