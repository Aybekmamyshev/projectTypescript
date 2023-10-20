import {baseApi,PRODUCT} from "../../../shared/api";
import {TypeSingle} from "./type";

export const singleApi = baseApi.injectEndpoints({
    endpoints : (build) => ({
        getSingle : build.query<TypeSingle, any>({
            query : (id)=> ({
                url : `products/${id}`,
            })
        })
    })
})

export  const  {useGetSingleQuery} = singleApi