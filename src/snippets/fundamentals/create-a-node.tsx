import CodeBlock from '@theme/CodeBlock';
import React from 'react';

export const createClass = <CodeBlock language="ts">{`
@FrostEntity({collectionPath:"/users"})
class User extends FrostObject<User>{
    id?:string
    name!:string
    userType!: "Customer" | "Admin"
    birthday?:string
    ...
}
`}</CodeBlock>

//wrong
export const specialConstructor = <CodeBlock language="ts">{`
@FrostEntity({collectionPath:"/users"})
class User extends FrostObject<User>{
    id?:string
    name!:string
    userType!: "Customer" | "Admin"
    birthday?:string
    ...
    constructor(id,name,userType,){
        super({id,name,userType})
    }
}
`}</CodeBlock>


export const instantiation = <CodeBlock language="ts">{`
new User({id:"user1",name:"User One",userType:"Customer"})
`}</CodeBlock>

export const createApi = <CodeBlock language="ts">{`
@FrostNode({entity:User})
class UserApi extends FrostApi<User>{}
`}</CodeBlock>

export const fullExample = <CodeBlock language="ts">{`
@FrostEntity({collectionPath:"/users"})
class User extends FrostObject<User>{
    id!:string
    name!:string
    userType!: "Customer" | "Admin"
    birthday?:string
}

@FrostNode({entity:User})
class UserApi extends FrostApi<User>{}


`}</CodeBlock>


