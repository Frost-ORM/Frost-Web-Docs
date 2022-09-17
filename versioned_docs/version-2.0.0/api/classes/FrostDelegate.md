[@frost-orm/frost-web-client](../modules.md) / [Exports](../modules.md) / FrostDelegate

# Class: FrostDelegate<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ModelTypes`](../types/ModelTypes.md) = [`ModelTypes`](../types/ModelTypes.md) |

## Table of contents

### Constructors

- [constructor](FrostDelegate.md#constructor)

### Methods

- [add](FrostDelegate.md#add)
- [delete](FrostDelegate.md#delete)
- [findMany](FrostDelegate.md#findmany)
- [findMultiple](FrostDelegate.md#findmultiple)
- [findOne](FrostDelegate.md#findone)
- [getAddMap](FrostDelegate.md#getaddmap)
- [getAllConnectedKeys](FrostDelegate.md#getallconnectedkeys)
- [getConnectedKeys](FrostDelegate.md#getconnectedkeys)
- [getDeleteMap](FrostDelegate.md#getdeletemap)
- [getRelated](FrostDelegate.md#getrelated)
- [getRelatedObservable](FrostDelegate.md#getrelatedobservable)
- [getUpdateMap](FrostDelegate.md#getupdatemap)
- [observeMany](FrostDelegate.md#observemany)
- [observeManyOld](FrostDelegate.md#observemanyold)
- [observeMultiple](FrostDelegate.md#observemultiple)
- [observeOne](FrostDelegate.md#observeone)
- [update](FrostDelegate.md#update)

## Constructors

### constructor

• **new FrostDelegate**<`T`\>(`firebaseDB`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ModelTypes`](../types/ModelTypes.md) = [`ModelTypes`](../types/ModelTypes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `firebaseDB` | `Database` |

## Methods

### add

▸ **add**(`object`, `connect?`): `Promise`<{ `id`: `string`  }\>

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
| `object` | `T`[``"Model"``] | The object instance containing the new changes |
| `connect?` | `T`[``"ConnectOptions"``] | see [ConnectOptions](../types/ConnectOptions.md). |

#### Returns

`Promise`<{ `id`: `string`  }\>

an object containing the update map and the new node id

___

### delete

▸ **delete**(`object`, `disconnect?`): `Promise`<`void`\>

Removes the Object from the database and disconnects related objects depending on the disconnect parameter

**`See`**

 - [getDeleteMap](FrostDelegate.md#getdeletemap).
 - [DisconnectOptions](../types/DisconnectOptions.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | [`FrostObject`](../types/FrostObject.md) | either the whole model or just a map with the id (ie; {id: "..."}) |
| `disconnect?` | `T`[``"DisconnectOptions"``] | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<`void`\>

___

### findMany

▸ **findMany**<`I`\>(`options`, ...`queryConstraints`): `Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>[]\>

Just like the [query](https://firebase.google.com/docs/reference/js/database.md#query) function in the firebaseDB,
 but the first parameter is options for relations then is spread parameter like [query](https://firebase.google.com/docs/reference/js/database.md#query)

Just like [observeMany](FrostDelegate.md#observemany) but with promises instead of observables.

**`See`**

 - [observeMany](FrostDelegate.md#observemany)
 - [IncludeOptions](../types/IncludeOptions.md).
 - [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | options for the query |
| `options.include?` | `I` | see [IncludeOptions](../types/IncludeOptions.md). |
| `...queryConstraints` | `QueryConstraint`[] | see [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint). |

#### Returns

`Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>[]\>

the query results with related objects that were given in the include parameter

___

### findMultiple

▸ **findMultiple**<`I`, `K`\>(`keys`, `options?`): `Promise`<`Record`<`ArrayValuesType`<`K`\>, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

Fetch Multiple Nodes in the Database.

Just like [findOne](FrostDelegate.md#findone) but with an array of ids instead of one
Just like [observeMultiple](FrostDelegate.md#observemultiple) but asynchronous(promise) instead of reactive.

**`See`**

 - [findOne](FrostDelegate.md#findone)
 - [observeMultiple](FrostDelegate.md#observemultiple)
 - [IncludeOptions](../types/IncludeOptions.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |
| `K` | extends `string`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `K` | an array of the instances' IDs that you want to observe |
| `options?` | `Object` | options for the query |
| `options.include?` | `I` | see [IncludeOptions](../types/IncludeOptions.md). |

#### Returns

`Promise`<`Record`<`ArrayValuesType`<`K`\>, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

a Map of the requested nodes instances

___

### findOne

▸ **findOne**<`I`\>(`id`, `include?`): `Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

Returns the object with the given id and containing the related instances with it (depending on the include parameter)

Just like [observeOne](FrostDelegate.md#observeone) but with promises instead of observables

**`See`**

 - [observeOne](FrostDelegate.md#observeone)
 - [IncludeOptions](../types/IncludeOptions.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `T`[``"IncludeOptions"``] | see [IncludeOptions](../types/IncludeOptions.md). |

#### Returns

`Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

the object instance of the given id with related objects that were given in the include parameter

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
| `object` | `T`[``"Model"``] | The object instance containing the new changes |
| `connect?` | `T`[``"ConnectOptions"``] | see [ConnectOptions](../types/ConnectOptions.md). |

#### Returns

`Promise`<{ `id`: `string` ; `map`: `any`  }\>

an object containing the update map and the new node id

___

### getAllConnectedKeys

▸ **getAllConnectedKeys**(`object`): `Record`<`string`, `string`[]\>

It fetches the connected instances keys of all relations

:::caution
	This function will return the keys depending on the metadata inside the `object` param. if the metadata is not updated to the latest version then it won't return the updated keys
if you want to the latest connected instances then you should refetch the data
:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T`[``"FullModel"``] | the object instance that you want to get the keys from |

#### Returns

`Record`<`string`, `string`[]\>

a map of property keys and corresponding array containing the ids of the instances that are connected. if there are no connected keys or the property name is incorrect then there'll be no key-value pair for the specific property

___

### getConnectedKeys

▸ **getConnectedKeys**(`propertyName`, `object`): `string`[]

It fetches the connected instances keys by property name

:::caution
	This function will return the keys depending on the metadata inside the `object` param. if the metadata is not updated to the latest version then it won't return the updated keys
if you want to the latest connected instances then you should refetch the data
:::

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertyName` | `T`[``"RelationsFieldsKeys"``] | the name of the property with the relation which keys' you require. |
| `object` | `T`[``"FullModel"``] | the object instance that you want to get the keys from |

#### Returns

`string`[]

an array containing the ids of the instances that are connected. if there are no connected keys or the property name is incorrect then there'll be no key-value pair for the specific property

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
| `object` | [`FrostObject`](../types/FrostObject.md) | either the whole model or just a map with the id (ie; {id: "..."}) |
| `disconnect?` | `T`[``"DisconnectOptions"``] | see [DisconnectOptions](../types/DisconnectOptions.md) |

#### Returns

`Promise`<{ `map`: `any`  }\>

an object containing the update map

___

### getRelated

▸ **getRelated**<`I`\>(`object`, `include?`): `Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

Returns the object with the related instances with it (depending on the include parameter)
Use this if you have an object instance without the related instances you want.

Same as [getRelatedObservable](FrostDelegate.md#getrelatedobservable) but with promises instead of observables

:::caution
	This function will fetch the connected instances depending on the metadata inside the `object` param. if the metadata is not updated to the latest version then it won't (not)fetch any new (dis)connected instances
if you want to the latest connected instances then you should refetch the data
:::

**`See`**

 - [getRelatedObservable](FrostDelegate.md#getrelatedobservable)
 - [IncludeOptions](../types/IncludeOptions.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T`[``"ModelWithMetadata"``] | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `T`[``"IncludeOptions"``] | see [IncludeOptions](../types/IncludeOptions.md). |

#### Returns

`Promise`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

an object instance with related objects that were given in the include parameter

___

### getRelatedObservable

▸ **getRelatedObservable**<`I`\>(`object`, `include?`, `listenToNestedChanges?`): `Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

Returns an observable of the object with the related instances with it (depending on the include parameter)
Use this if you have an object instance without the related instances you want.

**`See`**

 - [IncludeOptions](../types/IncludeOptions.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).

:::caution
	This function will fetch the connected instances depending on the metadata inside the `object` param. if the metadata is not updated to the latest version then it won't (not)fetch any new (dis)connected instances
if you want to the latest connected instances then you should refetch the data
:::

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T`[``"ModelWithMetadata"``] | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `T`[``"IncludeOptions"``] | see [IncludeOptions](../types/IncludeOptions.md). |
| `listenToNestedChanges?` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |

#### Returns

`Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

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
| `object` | `Partial`<`T`[``"Model"``]\> | The object instance containing the new changes |
| `connect?` | `T`[``"ConnectOptions"``] | see [ConnectOptions](../types/ConnectOptions.md). |
| `disconnect?` | `T`[``"DisconnectOptions"``] | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<{ `map`: `any`  }\>

an object containing the update map

___

### observeMany

▸ **observeMany**<`I`\>(`options?`, ...`queryConstraints`): `Observable`<`Record`<`string`, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

Just like the [query](https://firebase.google.com/docs/reference/js/database.md#query) function in the firebaseDB,
but with observables, also the first parameter is options for the observable then is spread parameter like [query](https://firebase.google.com/docs/reference/js/database.md#query)

**`See`**

 - [IncludeOptions](../types/IncludeOptions.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).
 - [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint).

**`Default Value`**

options.debounceDuration 500

**`Default Value`**

options.listenToNestedChanges false

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options for the observable |
| `options.debounceDuration?` | `number` | in Milliseconds. incase multiple changes happen to the query in short time, this will prevent the observable to emit too many times |
| `options.include?` | `I` | see [IncludeOptions](../types/IncludeOptions.md). |
| `options.listenToNestedChanges?` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |
| `...queryConstraints` | `QueryConstraint`[] | see [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint). |

#### Returns

`Observable`<`Record`<`string`, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

an Observable of the query results with related objects that were given in the include parameter

___

### observeManyOld

▸ **observeManyOld**<`I`\>(`options?`, ...`queryConstraints`): `Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>[]\>

Just like the [query](https://firebase.google.com/docs/reference/js/database.md#query) function in the firebaseDB,
but with observables, also the first parameter is options for the observable then is spread parameter like [query](https://firebase.google.com/docs/reference/js/database.md#query)

**`See`**

 - [IncludeOptions](../types/IncludeOptions.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).
 - [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint).

**`Default Value`**

options.debounceDuration 500

**`Default Value`**

options.listenToNestedChanges false

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options for the observable |
| `options.debounceDuration?` | `number` | in Milliseconds. incase multiple changes happen to the query in short time, this will prevent the observable to emit too many times |
| `options.include?` | `T`[``"IncludeOptions"``] | see [IncludeOptions](../types/IncludeOptions.md). |
| `options.listenToNestedChanges?` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |
| `...queryConstraints` | `QueryConstraint`[] | see [QueryConstraint](https://firebase.google.com/docs/reference/js/database.queryconstraint). |

#### Returns

`Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>[]\>

an Observable of the query results with related objects that were given in the include parameter

___

### observeMultiple

▸ **observeMultiple**<`I`, `K`\>(`keys`, `options?`): `Observable`<`Record`<`ArrayValuesType`<`K`\>, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

Observe Multiple Nodes in the Database.

Just like [observeOne](FrostDelegate.md#observeone) but with an array of ids instead of one
Just like [findMultiple](FrostDelegate.md#findmultiple) but reactive.

**`See`**

 - [observeOne](FrostDelegate.md#observeone)
 - [findMultiple](FrostDelegate.md#findmultiple)
 - [IncludeOptions](../types/IncludeOptions.md).

**`Default Value`**

listenToNestedChanges false

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |
| `K` | extends `string`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `K` | an array of the instances' IDs that you want to observe |
| `options?` | `Object` | options for the query |
| `options.include?` | `I` | see [IncludeOptions](../types/IncludeOptions.md). |
| `options.listenToNestedChanges` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |

#### Returns

`Observable`<`Record`<`ArrayValuesType`<`K`\>, [`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>\>

a Map of the requested nodes instances

___

### observeOne

▸ **observeOne**<`I`\>(`id`, `include?`, `listenToNestedChanges?`): `Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

Returns an observable of the object with the given id and containing the related instances with it (depending on the include parameter)

**`See`**

 - [IncludeOptions](../types/IncludeOptions.md).
 - [ListenToNestedChanges](../types/ListenToNestedChanges.md).

**`Default Value`**

listenToNestedChanges false

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `Partial`<`Record`<`string`, `boolean`\>\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | The object that you want to get the related objects from. (doesn't have to be an instantiated object could be the data map that was fetched manually ) |
| `include?` | `I` | `undefined` | see [IncludeOptions](../types/IncludeOptions.md). |
| `listenToNestedChanges` | [`ListenToNestedChanges`](../types/ListenToNestedChanges.md) | `false` | see [ListenToNestedChanges](../types/ListenToNestedChanges.md). |

#### Returns

`Observable`<[`FetchReturnType`](../types/FetchReturnType.md)<`T`, `I`\>\>

an Observable of the object instance of the given id with related objects that were given in the include parameter

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
| `object` | `Partial`<`T`[``"Model"``]\> & `Required`<[`FrostObject`](../types/FrostObject.md)\> | The object instance containing the new changes |
| `connect?` | `T`[``"ConnectOptions"``] | see [ConnectOptions](../types/ConnectOptions.md). |
| `disconnect?` | `T`[``"DisconnectOptions"``] | see [DisconnectOptions](../types/DisconnectOptions.md). |

#### Returns

`Promise`<`void`\>
