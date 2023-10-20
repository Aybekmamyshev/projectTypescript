import {baseApi} from "../../../shared/api";
import {TypeUserReg} from "./type";

export const apiUser = baseApi.injectEndpoints({
    endpoints : (build) => ({
        regUser : build.mutation<void,TypeUserReg>({
            query : (data) =>  ({
                method : "POST",
                url : "users",
                body: data
            })
        }),
        loginUser : build.mutation({
            query : (body: {email : string, password : string})  => ({
                method: "POST",
                url:  "auth/login",
                body
            })
        })
    })
})

export const {useRegUserMutation,useLoginUserMutation} = apiUser