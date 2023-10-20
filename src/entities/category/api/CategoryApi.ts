import {baseApi} from "../../../shared/api";
import {TypeCategories} from "./type";


export const  categoryApi = baseApi.injectEndpoints({
    endpoints : (build) => ({
        getCategories : build.query<TypeCategories[], void>({
            query : () => ({
                url : "categories"
            })
        })
    })
})

export const  {useGetCategoriesQuery} = categoryApi