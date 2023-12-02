import { createSlice } from "@reduxjs/toolkit";

//set initial state
const initialState = {
    cats:[],
    isLoading:true
}

//slice is table
export const catSlice = createSlice({
    //name of table
    name: 'cats',
    //set initial  state
    initialState,
    //REDUCER
    //helps to change state
    reducers: {
       getCatsFetch:(state)=>{
        state.isLoading = true
       },
       getCatsSuccess:(state,action)=>{
        state.cats=action.payload
        state.isLoading = false
       },
       getCatsFailure:(state)=>{
        state.isLoading = false
       }
    }
})

//ACTION
//action has to be triggered
export const { getCatsFetch,getCatsSuccess,getCatsFailure} = catSlice.actions
//reducer helps to export created all Reducer 
export default catSlice.reducer