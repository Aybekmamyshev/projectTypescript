
export interface TypeSingleSlice {
    id: number,
    title : string,
    price : number
    description : string,
    count?: any
    category? : TypeCategorySingle,
    images : string[]
}

interface  TypeCategorySingle {
    id : number,
    name: string,
    image : string
}

export interface UserSingle {
    cart : TypeSingleSlice[],
    total : number
}
