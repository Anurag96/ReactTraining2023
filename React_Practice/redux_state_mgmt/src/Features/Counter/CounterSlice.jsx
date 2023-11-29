import { createSlice } from "@reduxjs/toolkit";

//set initial state
const initialState = {
    count: 0
}

//slice is table
export const counterSlice = createSlice({
    //name of table
    name: 'counter',
    //set initial  state
    initialState,
    //REDUCER
    //helps to change state
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

//ACTION
//action has to be triggered
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions
//reducer helps to export created all Reducer 
export default counterSlice.reducer