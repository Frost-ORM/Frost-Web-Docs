[@frost/frost-web](../modules.md) / [Exports](../modules.md) / ListenToNestedChanges

# Type alias: ListenToNestedChanges

Ƭ **ListenToNestedChanges**: `boolean` \| `Record`<[`RelationTypes`](../enums/RelationTypes.md), `boolean`\>

This helps you determine which relation you want to listen to changes from.
if the value is:
- true then it will listen to all the changes
- false then it won't listen to any of the changes
- key-value pairs with the key being [RelationTypes](../enums/RelationTypes.md) and value being a boolean to determine whether or not to listen to specified type of relations.
