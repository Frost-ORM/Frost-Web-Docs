[@frost/frost-web](../modules.md) / [Exports](../modules.md) / AdvancedJSONPrimitive

# Type alias: AdvancedJSONPrimitive<T\>

Ƭ **AdvancedJSONPrimitive**<`T`\>: `T` extends `number` ? `number` : `T` extends `boolean` ? `boolean` : `T` extends `string` ? `string` : `any`

This type predicts the type of the Json primitive depending on the type of property

 - if it's a number then number 

 - if it's a boolean then boolean 

 - if it's a string then string

 - else it's any (could be an array | map | string | null)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type that is used to predict the Json primitive type |
