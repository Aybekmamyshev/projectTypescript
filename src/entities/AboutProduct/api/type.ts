
export interface  TypeSingle {
    id: number,
    title : string,
    price : number
    description : string,
    category : TypeCategorySingle,
    images : string[]
}

interface  TypeCategorySingle {
    id : number,
    name: string,
    image : string
}