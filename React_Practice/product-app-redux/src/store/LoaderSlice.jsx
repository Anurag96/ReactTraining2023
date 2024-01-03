import { createSlice } from '@reduxjs/toolkit'

const LoaderSlice = createSlice({
    name: 'load',
    initialState: false,
    reducers: {
        isLoading(state, action) {
            return action.payload;
        }
    }
})

export const { isLoading } = LoaderSlice.actions

export default LoaderSlice.reducer