[@frost/frost-web](../modules.md) / [Exports](../modules.md) / Relation

# Function: Relation

▸ **Relation**(`options`): `PropertyDecorator`

This decorator allows you to define the relations between the properties of [FrostEntities](FrostEntity.md)

**`Decorator`**

:::caution
The Relation is defined on both sides but one side is the main side and the other is secondary.

In case of symmetric relation the order of the sides doesn't matter but with ***One-to-Many*** the main side should be the `One` side.
The main side should have the master property equal true.
:::

**`Example`**

```ts
@FrostEntity({collectionPath:"/a"})
class A extends FrostObject{
...
@Relation({
 name: "AB",
 relation: RelationTypes.ONE_TO_MANY,
 type: () => B,
})
b?:B[]

...
}

@FrostEntity({collectionPath:"/b"})
class B extends FrostObject{
...
@Relation({
 name: "AB",
 type: () => A,
})
a?:() => A

...
}
```

**`See`**

[RelationOptions](../types/RelationOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`RelationOptions`](../types/RelationOptions.md) | options that define the relation. for more details. |

#### Returns

`PropertyDecorator`
