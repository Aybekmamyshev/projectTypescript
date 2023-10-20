

export interface TypeUser {
    user : TypeObject | null
    showFile : boolean | null
}

export interface TypeObject {
    email : string,
    name : string,
    password : string,
    avatar : string
}