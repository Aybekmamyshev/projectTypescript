
export interface  TypeProduct {
    id: number,
    title : string,
    price : number
    description : string,
    category? : TypeCategory,
    images : string[]
}

 interface  TypeCategory {
     id : number,
     name: string,
     image : string
 }