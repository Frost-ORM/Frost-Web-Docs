[@frost-orm/frost-web-client](../modules.md) / [Exports](../modules.md) / ConnectOptions

# Type alias: ConnectOptions<T\>

Ƭ **ConnectOptions**<`T`\>: `Partial`<`Record`<`T`[``"one_to_one"``], `string`\> & `Record`<`T`[``"many_to_many"``], `string`[]\> & `Record`<`T`[``"one_to_many_master_fields"``], `string`\> & `Record`<`T`[``"one_to_many_slave_fields"``], `string`[]\>\>

The related instances to connect

- undefined which won't connect any relations or
- a map with the keys of the properties to connect and the possible values are one of the following:
	- Incase of One to One: the string of the id of the instance to be connected
	- Incase of Many to Many: an array of the ids of the instances to be connected
	- Incase of Many to Many:
		- From the One side:  an array of the ids of the instances to be connected
		- From the Many side: the string of the id of the instance to be connected

**`Example`**

Symmetric: One-to-One and Many-to-Many
```json
{
	"studentProfileData":"-N8ZU2qq5erVSvauDtuR", // One-to-One
	"courses": [
		"-N8ZU2tQNvC_1GV5kMa8",
		"-N8ZU2w3diHdn0b5AIsB",
		"-N8ZU30J_KfcwcRlUcPK",
		"-N8ZU33c0V8yIB-7oDV3",
],// Many-to-Many
}
```

**`Example`**

One-to-Many (One Side)
```json
{
	"posts":[
		"-N8ZU2tQNvC_1GV5kMa8",
		"-N8ZU2w3diHdn0b5AIsB",
		"-N8ZU30J_KfcwcRlUcPK",
		"-N8ZU33c0V8yIB-7oDV3",
	],
}
```

**`Example`**

One-to-Many (Many Side)
```json
{
	"author":"-N8ZU2qq5erVSvauDtuR",
}
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<`Record`<`RelationTypeWithSubTypes`, `any`\>\> |
