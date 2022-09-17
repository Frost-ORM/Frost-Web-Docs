[@frost/frost-web](../modules.md) / [Exports](../modules.md) / Frost

# Class: Frost

## Table of contents

### Constructors

- [constructor](Frost.md#constructor)

### Properties

- [firebaseApp](Frost.md#firebaseapp)
- [firebaseDB](Frost.md#firebasedb)

### Accessors

- [initialized](Frost.md#initialized)

### Methods

- [getIndices](Frost.md#getindices)
- [initialize](Frost.md#initialize)

## Constructors

### constructor

• **new Frost**()

## Properties

### firebaseApp

▪ `Static` **firebaseApp**: `FirebaseApp`

___

### firebaseDB

▪ `Static` **firebaseDB**: `Database`

## Accessors

### initialized

• `Static` `get` **initialized**(): `boolean`

#### Returns

`boolean`

## Methods

### getIndices

▸ `Static` **getIndices**(): `string`

#### Returns

`string`

a JSON String for the indices to be added to the Firebase Realtime Database

___

### initialize

▸ `Static` **initialize**<`T`\>(`firebaseConfig`, `APIs`): `FrostAppImpl`<`T`\>

This method initializes the firebase app instance and the database instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firebaseConfig` | `FirebaseOptions` |
| `APIs` | `T` |

#### Returns

`FrostAppImpl`<`T`\>

[FirebaseApp](https://firebase.google.com/docs/reference/js/app.firebaseapp.md#firebaseapp_interface)
