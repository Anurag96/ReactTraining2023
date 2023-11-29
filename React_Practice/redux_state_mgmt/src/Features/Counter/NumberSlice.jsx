import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    count: 2,
    name: 'Enter'
}
export const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers: {
        addNumber: (state) => {
            state.count += 1
        },
        subNumber: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        },
        userName: (state, action) => action.payload
    }

})
export const { addNumber, subNumber, incrementByAmount, userName } = numberSlice.actions

export default numberSlice.reducer
