[@frost/frost-web](../modules.md) / [Exports](../modules.md) / Deserializer

# Type alias: Deserializer<D, P\>

Ƭ **Deserializer**<`D`, `P`\>: (`value`: `D`, `object`: `any`) => `P`

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `D` | extends [`AdvancedJSONPrimitive`](AdvancedJSONPrimitive.md)<`P`\> \| `undefined` \| ``null`` | the type of serialized property ( checkout the Type [AdvancedJSONPrimitive<P\>](AdvancedJSONPrimitive.md) ) |
| `P` | `P` | type of the property after Deserializing |

#### Type declaration

▸ (`value`, `object`): `P`

A Type of A Function that serializes the data to JSON

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `D` |
| `object` | `any` |

##### Returns

`P`
