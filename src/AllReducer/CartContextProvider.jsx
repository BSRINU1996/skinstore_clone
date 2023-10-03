import { useReducer } from "react"
import { reducer, useState, createContext } from "react"
import { Reducer } from "./Reducer"
const init = {
    items: [],
    user: [{ email: "balisrinu1996@gmail.com", password: 1234 }, { email: 'balisrinu01@gmail.com', password: 123 }, { email: 'balisrinu01@gmail.com1', password: 12 }]
}

export const CartContext = createContext()

export function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(Reducer, init)
    return <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
}