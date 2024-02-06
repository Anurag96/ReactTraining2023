import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProducts(state, action) {
            state.data = action.payload
        }
    }
})

export const { fetchProducts } = productSlice.actions

export default productSlice.reducer


// This is a Thunk Action creataor (which is generic & OG style), instead of calling fetchProducts we will call getProducts in Dispatch.
export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
        const val = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log(err)
        })
        const result = val.data
        dispatch(fetchProducts(result))

    }
}