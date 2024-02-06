import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import LoaderSlice from "./LoaderSlice";
import productSlice from "./productSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,
        load: LoaderSlice,
        products: productSlice
    }
})

export default store