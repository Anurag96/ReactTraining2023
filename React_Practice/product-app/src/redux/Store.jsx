import { configureStore } from "@reduxjs/toolkit"
import loadingSlice from "./loadingSlice"

//STORE
export const store = configureStore({
    reducer: {
        loadingSlice: loadingSlice,
    }
})

export default store