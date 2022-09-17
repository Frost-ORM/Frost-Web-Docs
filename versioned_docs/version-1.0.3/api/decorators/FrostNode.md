[@frost/frost-web](../modules.md) / [Exports](../modules.md) / FrostNode

# Function: FrostNode

▸ **FrostNode**<`T`, `I`\>(`options`): <E\>(`constructor`: `E`) => { `prototype`: `__class`<`any`, `any`, `any`\>  } & `E`

This decorator allows you to declare an api class and provide the FrostObject Class to it
This decorator is used to mark classes that extend [FrostApi<T extends FrostObject\>](../classes/FrostApi.md)

**`Decorator`**

**`Example`**

```ts
@FrostEntity({collectionPath : "/users"})
class User extends FrostObject {
...
}

@FrostNode({entity : User})
class UsersApi extends FrostApi<User> {
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FrostObject`](../classes/FrostObject.md)<{ `id?`: `string`  }, `T`\> |
| `I` | extends [`IFrostObject`](../types/IFrostObject.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Api Options |
| `options.entity` | `I` | the class that extends the FrostObject Class |

#### Returns

`fn`

▸ <`E`\>(`constructor`): { `prototype`: `__class`<`any`, `any`, `any`\>  } & `E`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends (...`args`: `any`[]) => [`FrostApi`](../classes/FrostApi.md)<`T`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `E` |

##### Returns

{ `prototype`: `__class`<`any`, `any`, `any`\>  } & `E`
