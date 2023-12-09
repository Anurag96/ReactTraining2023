import { configureStore } from '@reduxjs/toolkit'
import numberSlice from '../Component/numberSlice'
import loaderSlice from '../Component/loaderSlice'

export default configureStore({
    reducer: {
        numberso: numberSlice,
        loadingo: loaderSlice
    }
})