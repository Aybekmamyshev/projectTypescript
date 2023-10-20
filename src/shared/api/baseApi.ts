import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BASE_URL} from "./constants";
import {PRODUCT} from "./tag";


export const baseApi = createApi({
    tagTypes: [PRODUCT],
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery(
        {baseUrl : `${BASE_URL}`}

    ),
    endpoints: () => ({}),
})