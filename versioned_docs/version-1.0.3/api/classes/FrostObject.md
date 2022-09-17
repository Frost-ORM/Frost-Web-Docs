[@frost/frost-web](../modules.md) / [Exports](../modules.md) / FrostObject

# Class: FrostObject<C\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | { `id?`: `string`  } |

## Table of contents

### Constructors

- [constructor](FrostObject.md#constructor)

### Properties

- [id](FrostObject.md#id)
- [collectionPath](FrostObject.md#collectionpath)

### Methods

- [flatten](FrostObject.md#flatten)
- [getAllConnectedKeys](FrostObject.md#getallconnectedkeys)
- [getConnectedKeys](FrostObject.md#getconnectedkeys)
- [serialize](FrostObject.md#serialize)
- [getConnectedKeys](FrostObject.md#getconnectedkeys-1)

## Constructors

### constructor

• **new FrostObject**<`C`\>(`data`, ...`args`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | { `id?`: `string`  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `OmitAllFunctions`<`C`\> & `Record`<`any`, `any`\> |
| `...args` | `any`[] |

## Properties

### id

• `Optional` **id**: `string`

all FrostObjects should have the id property, you can override it in the derived class

___

### collectionPath

▪ `Static` **collectionPath**: `string`

## Methods

### flatten

▸ **flatten**(`withExcluded?`): `any`

This flattens the object and transforms into a plain js object and transforms the properties with relations from functions that return values to direct values
This is beneficial in case you don't want to deal with functions that return the data.
   *

**`Default Value`**

withExcluded true

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `withExcluded` | `boolean` | `true` | to determine whether the flattened object should contain the excluded properties or not.    * |

#### Returns

`any`

plain js object containing the all the values of the main object, along with related objects as plain js arrays and maps.

___

### getAllConnectedKeys

▸ **getAllConnectedKeys**(): `Record`<`string`, `string`[]\>

**`See`**

[getConnectedKeys](FrostObject.md#getconnectedkeys-1)

#### Returns

`Record`<`string`, `string`[]\>

a map with keys being all the properties with relations and the values being an array containing the ids of the instances that are connected. if there are no connected keys there'll be no key-value pair for the specific property

___

### getConnectedKeys

▸ **getConnectedKeys**(`propertyName`): `string`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | the name of the property with the relation which keys' you require. |

#### Returns

`string`[]

an array containing the ids of the instances that are connected. if there are no connected keys or the property name is incorrect then there'll be no key-value pair for the specific property

___

### serialize

▸ **serialize**(): `any`

#### Returns

`any`

plain js object containing the all the values of the main object after all the serializers have been applied. (without related objects)

___

### getConnectedKeys

▸ `Static` **getConnectedKeys**(`propertyName`, `object`): `string`[]

**`See`**

[getConnectedKeys](FrostObject.md#getconnectedkeys-1)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `string` | the name of the property with the relation which keys' you require. |
| `object` | `any` | the object instance that you want to get the keys from |

#### Returns

`string`[]

an array containing the ids of the instances that are connected. if there are no connected keys or the property name is incorrect then there'll be no key-value pair for the specific property
