import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Features/Counter/CounterSlice"
import numberReducer from "../Features/Counter/NumberSlice"
import userReducer from "../Features/Counter/userSlice"

//STORE
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        number: numberReducer,
        user: userReducer
    }
})

export default store