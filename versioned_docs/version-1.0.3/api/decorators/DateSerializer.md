[@frost/frost-web](../modules.md) / [Exports](../modules.md) / DateSerializer

# Function: DateSerializer

▸ **DateSerializer**<`T`\>(): `PropertyDecorator`

This a default Date [Serialize](Serialize.md) Decorator that will use the native JS Date Class to serialize and deserialize the dates

use this to serialize the dates by default

**`Decorator`**

**`Example`**

```ts
@FrostEntity(...)
class A extends FrostObject {
     @DateSerializer()
     createdAt?: Date;
}
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`PropertyDecorator`
