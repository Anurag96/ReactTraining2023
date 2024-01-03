import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import LoaderSlice from "./LoaderSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        load: LoaderSlice
    }
})

export default store