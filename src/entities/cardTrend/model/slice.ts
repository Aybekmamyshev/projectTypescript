import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeNumber} from "./type";

const initialState : TypeNumber = {
    number : 4
}

const moreSlice = createSlice({
    name : "number",
    initialState,
    reducers :  {
        plusProduct : (state, action : PayloadAction<number>)   => {
            state.number += action.payload
        }
    }
})

export const {plusProduct} = moreSlice.actions
export default  moreSlice.reducer