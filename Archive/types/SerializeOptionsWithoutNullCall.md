[@frost/frost-web](../modules.md) / [Exports](../modules.md) / SerializeOptionsWithoutNullCall

# Type alias: SerializeOptionsWithoutNullCall<T, P\>

Ƭ **SerializeOptionsWithoutNullCall**<`T`, `P`\>: `Object`

Options object passed to the function [Serialize](../decorators/Serialize.md)

**`Property`**

is set to false|undefined this means that the de/serializing functions will not be called when the values are null|undefined

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
| `allowNullCall?` | ``false`` |
| `deserialize` | [`Deserializer`](Deserializer.md)<[`AdvancedJSONPrimitive`](AdvancedJSONPrimitive.md)<`P`\>, `P`\> |
| `serialize` | [`Serializer`](Serializer.md)<`T`, `P`\> |
