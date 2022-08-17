[@frost/frost-web](../modules.md) / [Exports](../modules.md) / FrostApi

# Class: FrostApi<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`FrostObject`](FrostObject.md) |

## Table of contents

### Methods

- [add](FrostApi.md#add)
- [delete](FrostApi.md#delete)
- [find](FrostApi.md#find)
- [findMany](FrostApi.md#findmany)
- [getAddMap](FrostApi.md#getaddmap)
- [getDeleteMap](FrostApi.md#getdeletemap)
- [getRelated](FrostApi.md#getrelated)
- [getRelatedObservable](FrostApi.md#getrelatedobservable)
- [getUpdateMap](FrostApi.md#getupdatemap)
- [listen](FrostApi.md#listen)
- [listenMany](FrostApi.md#listenmany)
- [update](FrostApi.md#update)

## Methods

### add

▸ **add**(`object`, `connect?`): `Promise`<{ `id`: `any`  }\>

inserts the new object with the new key from the push function or the key that was passed down with the object instance.
also connects the instance depending on the connect parameter

:::caution
***Warning:*** Changes to nested instances won't be applied
:::

**`See`**

[ConnectOptions](../types/ConnectOptions.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance containing the new changes |
| `connect?` | `Record`<`string`, `string` \| `string`[]\> | see [ConnectOptions](../types/ConnectOptions.md). |

#### Returns

`Promise`<{ `id`: `any`  }\>

an object containing the update map and the new node id

___

### delete

▸ **delete**(`object`, `disconnect?`): `Promise`<`void`\>

Removes the Object from the database and disconnects related objects depending on the disconnect parameter

**`See`**

 - [getDeleteMap](FrostApi.md#getdeletemap).
 - [DisconnectOptions](../types/DisconnectOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance to be deleted from the database (the object instance should be the one fetched from Frost or you can do it manually be constructing an instance) |
| `disconnect?` | [`DisconnectOptions`](../types/DisconnectOptions.md) | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<`void`\>

___

### find

▸ **find**(`id`, `include?`): `Promise`<`T`\>

Returns the object with the given id and containing the related instances with it (depending on the include parameter)

Just like [listen](FrostApi.md#listen) but with promises instead of observables

**`See`**

 - [listen](FrostApi.md#listen)
 - [Include](../types/Include.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `string`[] | see [Include](../types/Include.md). |

#### Returns

`Promise`<`T`\>

the object instance of the given id with related objects that were given in the include parameter

___

### findMany

▸ **findMany**(`options`, ...`queryConstraints`): `Promise`<`T`[]\>

Just like the [query](https://firebase.google.com/docs/reference/js/database.md#query) function in the firebaseDB,
 but the first parameter is options for relations then is spread parameter like [query](https://firebase.google.com/docs/reference/js/database.md#query)

Just like[listenMany](FrostApi.md#listenmany) but with promises instead of observables.

**`See`**

 - [listenMany](FrostApi.md#listenmany)
 - [Include](../types/Include.md).
 - [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | options for the observable |
| `options.include?` | `string`[] | see [Include](../types/Include.md). |
| `...queryConstraints` | `QueryConstraint`[] | see [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint). |

#### Returns

`Promise`<`T`[]\>

the query results with related objects that were given in the include parameter

___

### getAddMap

▸ **getAddMap**(`object`, `connect?`): `Promise`<{ `id`: `string` ; `map`: `any`  }\>

Returns a map containing the updates to the database that could be passed to firebaseDB update function.
Also the map contains the new object with the new key from the push function or the key that was passed down with the object instance.
also connects the instance depending on the connect parameter.
:::caution
***Warning:*** Changes to nested instances won't be applied
:::

**`See`**

[ConnectOptions](../types/ConnectOptions.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance containing the new changes |
| `connect?` | `Record`<`string`, `string` \| `string`[]\> | see [ConnectOptions](../types/ConnectOptions.md). |

#### Returns

`Promise`<{ `id`: `string` ; `map`: `any`  }\>

an object containing the update map and the new node id

___

### getDeleteMap

▸ **getDeleteMap**(`object`, `disconnect?`): `Promise`<{ `map`: `any`  }\>

Returns a map of the updates that could be passed to the updated function from firebaseDB
if the map is applied it removes the Object from the database and disconnects related objects depending on the disconnect parameter

**`See`**

[DisconnectOptions](../types/DisconnectOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance to be deleted from the database (the object instance should be the one fetched from Frost or you can do it manually be constructing an instance) |
| `disconnect?` | [`DisconnectOptions`](../types/DisconnectOptions.md) | see [DisconnectOptions](../types/DisconnectOptions.md) |

#### Returns

`Promise`<{ `map`: `any`  }\>

an object containing the update map

___

### getRelated

▸ **getRelated**(`object`, `include?`): `Promise`<`T`\>

Returns the object with the related instances with it (depending on the include parameter)
Use this if you have an object instance without the related instances you want.

Same as [getRelatedObservable](FrostApi.md#getrelatedobservable) but with promises instead of observables

**`See`**

 - [getRelatedObservable](FrostApi.md#getrelatedobservable)
 - [Include](../types/Include.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `string`[] | see [Include](../types/Include.md). |

#### Returns

`Promise`<`T`\>

an object instance with related objects that were given in the include parameter

___

### getRelatedObservable

▸ **getRelatedObservable**(`object`, `include?`, `listenToNestedChanges?`): `Observable`<`T`\>

Returns an observable of the object with the related instances with it (depending on the include parameter)
Use this if you have an object instance without the related instances you want.

**`See`**

 - [Include](../types/Include.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `any` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `string`[] | see [Include](../types/Include.md). |
| `listenToNestedChanges?` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |

#### Returns

`Observable`<`T`\>

an Observable of the object instance with related objects that were given in the include parameter

___

### getUpdateMap

▸ **getUpdateMap**(`object`, `connect?`, `disconnect?`): `Promise`<{ `map`: `any`  }\>

Returns a map containing the updates that could be passed to firebaseDB update function
:::caution
***Warning:*** Changes to nested instances won't be applied
:::

**`See`**

 - [ConnectOptions](../types/ConnectOptions.md).
 - [DisconnectOptions](../types/DisconnectOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance containing the new changes |
| `connect?` | `Record`<`string`, `string` \| `string`[]\> | see [ConnectOptions](../types/ConnectOptions.md). |
| `disconnect?` | [`DisconnectOptions`](../types/DisconnectOptions.md) | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<{ `map`: `any`  }\>

an object containing the update map

___

### listen

▸ **listen**(`id`, `include?`, `listenToNestedChanges?`): `Observable`<`T`\>

Returns an observable of the object with the given id and containing the related instances with it (depending on the include parameter)

**`See`**

 - [Include](../types/Include.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).

**`Default Value`**

listenToNestedChanges true

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `string`[] | `undefined` | see [Include](../types/Include.md). |
| `listenToNestedChanges` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | `true` | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |

#### Returns

`Observable`<`T`\>

an Observable of the object instance of the given id with related objects that were given in the include parameter

___

### listenMany

▸ **listenMany**(`options`, ...`queryConstraints`): `Observable`<`T`[]\>

Just like the [query](https://firebase.google.com/docs/reference/js/database.md#query) function in the firebaseDB,
but with observables, also the first parameter is options for the observable then is spread parameter like [query](https://firebase.google.com/docs/reference/js/database.md#query)

**`See`**

 - [Include](../types/Include.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).
 - [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint).

**`Default Value`**

options.debounceDuration 500

**`Default Value`**

options.listenToNestedChanges true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | options for the observable |
| `options.debounceDuration?` | `number` | in Milliseconds. incase multiple changes happen to the query in short time, this will prevent the observable to emit too many times |
| `options.include?` | `string`[] | see [Include](../types/Include.md). |
| `options.listenToNestedChanges?` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |
| `...queryConstraints` | `QueryConstraint`[] | see [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint). |

#### Returns

`Observable`<`T`[]\>

an Observable of the query results with related objects that were given in the include parameter

___

### update

▸ **update**(`object`, `connect?`, `disconnect?`): `Promise`<`void`\>

preforms the updates on the object instance and dis/connects relations depending on the options
:::caution
***Warning:*** Changes to nested instances won't be applied
:::

**`See`**

 - [ConnectOptions](../types/ConnectOptions.md).
 - [DisconnectOptions](../types/DisconnectOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | The object instance containing the new changes |
| `connect?` | `Record`<`string`, `string` \| `string`[]\> | see [ConnectOptions](../types/ConnectOptions.md). |
| `disconnect?` | [`DisconnectOptions`](../types/DisconnectOptions.md) | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<`void`\>
