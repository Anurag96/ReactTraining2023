import { configureStore } from "@reduxjs/toolkit"
import loadingSlice from "./loadingSlice"

//STORE
export const store = configureStore({
    reducer: {
        isLoading: loadingSlice
    }
})

export default store
