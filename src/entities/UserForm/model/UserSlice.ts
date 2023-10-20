import {createSlice} from "@reduxjs/toolkit";
import {TypeUser} from "./type";


const initialState: TypeUser | null = {
    user: null,
    showFile: false
}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        openForm : (state, {payload}) => {
            state.showFile = payload
        },
        addUser : (state , action ) => {
            state.user = action.payload
        },
        deleteUser : (state) => {
            state.user = null
        }
    }
})

export const {openForm,addUser,deleteUser} = userSlice.actions

export default userSlice.reducer