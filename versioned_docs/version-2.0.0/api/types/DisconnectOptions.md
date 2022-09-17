[@frost-orm/frost-web-client](../modules.md) / [Exports](../modules.md) / DisconnectOptions

# Type alias: DisconnectOptions<T\>

Ƭ **DisconnectOptions**<`T`\>: `Partial`<`Record`<`T`[``"one_to_one"``], `string` \| ``true``\> & `Record`<`T`[``"one_to_many_master_fields"``], `string` \| ``true``\> & `Record`<`T`[``"one_to_many_slave_fields"``], `string`[] \| ``true`` \| ``"all"``\> & `Record`<`T`[``"many_to_many"``], `string`[] \| ``true`` \| ``"all"``\>\> \| `boolean` \| ``"all"``

The related instances to disconnect

- Either the string `all` which will disconnect all relations or
- undefined which won't disconnect any relations or
- a map with the keys of the properties to disconnect and the possible values are one of the following:
	- `all`|true, works with all relation types. will disconnect everything
	- Incase of One to One: the string of the id of the connected instance
	- Incase of Many to Many: an array of the ids of the connected instances
	- Incase of Many to Many:
		- From the One side:  an array of the ids of the connected instances
		- From the Many side: the string of the id of the connected instance

**`Example`**

All Relations
```json
"all"
```

**`Example`**

All specific relations
```json
{
	"posts": "all",
	"comments": "all",
}
//OR 
{
	"posts": true,
 "comments": true,
}
```

**`Example`**

Disconnect specific nodes
```json
{
	"posts": [
		"-N8ZU2tQNvC_1GV5kMa8",
		"-N8ZU2w3diHdn0b5AIsB",
		"-N8ZU30J_KfcwcRlUcPK",
		"-N8ZU33c0V8yIB-7oDV3",
],
 "comments": [
		"-N8ZU24sYM2NoXV1NdA2",
		"-N8ZU2oH4rRaaWaA2M8Y",
],
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<`Record`<`RelationTypeWithSubTypes`, `any`\>\> |
