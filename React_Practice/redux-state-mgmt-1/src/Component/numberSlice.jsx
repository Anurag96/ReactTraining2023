import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
    name: 'numbers',
    initialState: {
        number: 1
    },
    reducers: {
        increment: (state, action) => {
            state.number += 1
        },
        decrement: (state, action) => {
            state.number -= 1
        }
    }
})

export const { increment, decrement } = numberSlice.actions

export default numberSlice.reducer

