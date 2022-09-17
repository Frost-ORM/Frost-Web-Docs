[@frost-orm/frost-web-client](../modules.md) / [Exports](../modules.md) / Frost

# Class: Frost

## Table of contents

### Constructors

- [constructor](Frost.md#constructor)

### Properties

- [firebaseApp](Frost.md#firebaseapp)
- [firebaseDB](Frost.md#firebasedb)
- [relations](Frost.md#relations)

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

___

### relations

▪ `Static` **relations**: `Record`<`string`, `Relation`\>

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

▸ `Static` **initialize**(`firebaseConfig`): `FrostAppImpl`<`DelegatesMap`\>

This method initializes the firebase app instance and the database instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `firebaseConfig` | `FirebaseOptions` |

#### Returns

`FrostAppImpl`<`DelegatesMap`\>

[FirebaseApp](https://firebase.google.com/docs/reference/js/app.firebaseapp.md#firebaseapp_interface)
