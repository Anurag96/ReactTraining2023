import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Features/Counter/CounterSlice"
import numberReducer from "../Features/Counter/NumberSlice"
import userReducer from "../Features/Counter/userSlice"

//STORE
export const store = configureStore({
    reducer: {
        //this 'counter' should match with useSelector((state) => state.counter.count)
        counter: counterReducer,
        number: numberReducer,
        user: userReducer
    }
})

export default store