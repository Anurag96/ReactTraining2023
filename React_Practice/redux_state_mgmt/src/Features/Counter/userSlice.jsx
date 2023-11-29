import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: "",
    reducers: {
        saveUser: (state, action) => action.payload + ", welcome home"
    }
})

export const { saveUser } = userSlice.actions

export default userSlice.reducer