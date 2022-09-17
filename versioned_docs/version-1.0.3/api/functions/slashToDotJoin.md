[@frost-orm/frost-web](../modules.md) / [Exports](../modules.md) / slashToDotJoin

# Function: slashToDotJoin

▸ **slashToDotJoin**(...`args`): `string`

Just like [join](join.md) but with dots instead of slashes

**`Example`**

```ts
join("/users","/customers.user1")
// returns "users.customers.user1"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `string`[] | multiple strings with or without surrounding slashes or dots |

#### Returns

`string`

a path string consisting of all the components with a single dot between each one.
