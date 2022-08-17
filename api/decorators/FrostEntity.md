[@frost/frost-web](../modules.md) / [Exports](../modules.md) / FrostEntity

# Function: FrostEntity

▸ **FrostEntity**(`options`): <T\>(`constructor`: `T`) => `void`

This decorator allows you to declare a class as a node in FirebaseDB and provide the path for it 

This decorator is used to mark classes that extend [FrostObject](../classes/FrostObject.md)

**`Decorator`**

**`Example`**

```ts
@FrostEntity({collectionPath : "/users"})
class User extends FrostObject {
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`FrostEntityDecoratorOptions`](../types/FrostEntityDecoratorOptions.md) | Entity Options |

#### Returns

`fn`

▸ <`T`\>(`constructor`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => [`FrostObject`](../classes/FrostObject.md)<{ `id?`: `string`  }\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `T` |

##### Returns

`void`
