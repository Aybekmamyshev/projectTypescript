
import {baseApi} from "../../shared/api";

export interface TypeProducts {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const apiFake = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getItems: build.query<TypeProducts[], void>({
            query: () => ({
                method: "GET",
                url: "todos"
            })
        })
    })
})

export const {useGetItemsQuery} = apiFake