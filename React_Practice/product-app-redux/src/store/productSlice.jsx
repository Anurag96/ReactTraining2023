import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    status: 'idle' //for asynch thunk
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {

                state.status = 'loading'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'idle'
            })
            .addCase(getProducts.rejected, (state, action) => {

                state.status = 'error'
            })
    }
})

export const { fetchProducts } = productSlice.actions

export default productSlice.reducer


export const getProducts = createAsyncThunk('products/get', async () => {
    const val = await axios.get('https://fakestoreapi.com/products').catch((err) => {
        console.log(err)
    })
    const result = val.data
    return result
})

// This is a Thunk Action creataor (which is generic & OG style), instead of calling fetchProducts we will call getProducts in Dispatch.
// export function getProducts() {
//     return async function getmyProductsThunk(dispatch, getState) {
//         const val = await axios.get('https://fakestoreapi.com/products').catch((err) => {
//             console.log(err)
//         })
//         const result = val.data
//         dispatch(fetchProducts(result))

//     }
// }