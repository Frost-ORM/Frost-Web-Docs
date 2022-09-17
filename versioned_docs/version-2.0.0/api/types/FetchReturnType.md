[@frost-orm/frost-web-client](../modules.md) / [Exports](../modules.md) / FetchReturnType

# Type alias: FetchReturnType<T, I\>

Ƭ **FetchReturnType**<`T`, `I`\>: [`With`](With.md)<`T`[``"Model"``], `T`[``"IncludeAll"``], `I`\> & `T`[``"FrostMetadata"``]

This Type determines the return type of queries depending on the include options and the specified model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ModelTypes`](ModelTypes.md) |
| `I` | extends `T`[``"IncludeOptions"``] |
