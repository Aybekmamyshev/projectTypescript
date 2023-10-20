import {baseApi} from "../../../shared/api";
import {TypeProduct} from "./type";
import {buildUrl} from "./_mocks_/mocksProductParametr";

export const productsApi = baseApi.injectEndpoints({
    endpoints : (build) => ({
        getProduct : build.query<TypeProduct[], void>({
            query : () => ({
                method : "GET",
                url : "products",
            })
        }),
        findProducts : build.query({
           query : (params) => buildUrl('products/',params ),
           providesTags : ['Product']
        })
    })
})

export const  {useGetProductQuery,useFindProductsQuery} = productsApi