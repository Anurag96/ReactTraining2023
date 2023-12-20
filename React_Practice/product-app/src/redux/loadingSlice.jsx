import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        storeIsLoading: (state, action) => {
            return action.payload;
        },
    },
});

// Actions
export const { storeIsLoading } = loadingSlice.actions;

// State
export const isLoading = (state) => state.isLoading;

// Reducer
export default loadingSlice.reducer;
