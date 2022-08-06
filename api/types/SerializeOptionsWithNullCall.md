[@frost/frost-web](../modules.md) / [Exports](../modules.md) / SerializeOptionsWithNullCall

# Type alias: SerializeOptionsWithNullCall<T, P\>

Ƭ **SerializeOptionsWithNullCall**<`T`, `P`\>: `Object`

Options object passed to the function [Serialize](../functions/Serialize.md)

**`Property`**

is set to true this means that the de/serializing functions will be called even if the values are null|undefined

**`Related`**

SerializeOptionsWithoutNullCall

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type of the Parent Object containing the property to be serialized |
| `P` | type of the property to be serialized |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowNullCall` | ``true`` |
| `deserialize` | [`Deserializer`](Deserializer.md)<[`AdvancedJSONPrimitive`](AdvancedJSONPrimitive.md)<`P`\> \| `undefined` \| ``null``, `P` \| ``null`` \| `undefined`\> |
| `serialize` | [`Serializer`](Serializer.md)<`T`, `P` \| ``null`` \| `undefined`\> |
