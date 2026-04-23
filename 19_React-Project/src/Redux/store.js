import configureStore from '@reduxjs/toolkit'
import searchReducer from './Features/searchSlice'

export const stroe = configureStore({
    reducer:{
        search = searchReducer,
    }
})