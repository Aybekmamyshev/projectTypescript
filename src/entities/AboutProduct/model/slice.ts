import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypeSingleSlice, UserSingle} from "./type";

const initialState: UserSingle = {
    cart: [],
    total : 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, {payload} : PayloadAction<TypeSingleSlice>) => {
            const newCart = [...state.cart]
            const found = state.cart.find(({id}) => id === payload.id);

            if (found) {
                newCart.map((item) => item.id === payload.id ? {...item, count : item.count! + 1} : item
                 )
            } else newCart.push({...payload , count : 1})

            state.cart = newCart
        },
        addCount : (state,{payload}) => {
             state.cart = state.cart.map((item) => {
                if (item.id === payload.id){
                    return {...item, count : item.count! + 1 }
                }
                return item
            })
         },
        removeCount : (state,{payload}) => {
            state.cart = state.cart.map((item) => {
                if (item.id === payload.id){
                    return {...item, count : item.count! - 1 }
                }
                return item
            })
        },
        deleteCart : (state,{payload})  => {
            state.cart = state.cart.filter((item) => item.id !== payload
            )
        },
        totalPrice : (state) => {
              state.cart.reduce((acc,rec) => rec.count + acc, 0)
        }

    }
})

export const {addItemToCart,deleteCart, addCount,removeCount,totalPrice} = cartSlice.actions
export default cartSlice.reducer