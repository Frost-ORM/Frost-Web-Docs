[@frost-orm/frost-web](../modules.md) / [Exports](../modules.md) / join

# Function: join

▸ **join**(...`args`): `string`

**`Example`**

```ts
join("/users","/customers/")
// returns "/users/customers/"
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | `string`[] | multiple strings with or without surrounding slashes |

#### Returns

`string`

a path string consisting of all the components with a single slash between each one.
