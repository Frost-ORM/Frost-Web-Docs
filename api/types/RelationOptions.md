[@frost/frost-web](../modules.md) / [Exports](../modules.md) / RelationOptions

# Type alias: RelationOptions

Ƭ **RelationOptions**: `Object`

Interface of the options that are passed to the [Relation](../functions/Relation.md) Decorator

**`Example`**

```ts
class A extends FrostObject{
...
@Relation({
 name: "AB",
relation: RelationTypes.ONE_TO_MANY,
type: () => B,
})
b?:() => B[]

...
}
```

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | the name of the relation, It should be the same on both sides |
| `reference?` | `string` | (unrecommended) the name of the local field that contains the id that the relations is based on. this is optional and actually it's recommend not to use unless needed. <br/> Frost by default handles the relations and the stored keys that connect the nodes, but if you need access to these keys you could use the methods ([getConnectedKeys](../classes/FrostObject.md#getconnectedkeys-1), FrostObject.getAllConnectedKeyss or you could set the reference on the relation. |
| `relation?` | [`RelationTypes`](../enums/RelationTypes.md) | the relation type [One to One, One to Many, Many to Many] |
| `type` | `any` | the data type of the local property that the relation is defined on, (ignore array brackets in case of many-to-many/ one-to-many).<br/> this is needed because of some limitations in the decorators in TS/JS.<br/> also it needs to be a function that returns the type to avoid cyclic dependency ```(()=>Type)```  check the example |
