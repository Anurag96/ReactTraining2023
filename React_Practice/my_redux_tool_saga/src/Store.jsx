import { configureStore } from "@reduxjs/toolkit"
import catReducer from "./catSlice"
//STORE
export const store = configureStore({
    reducer: {
        counter: catReducer
    }
})

export default store