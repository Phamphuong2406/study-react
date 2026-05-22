import {configureStore} from '@reduxjs/toolkit'
import counterReduce  from './slices/counterSlice'

export const store = configureStore({
    reducer:{
        counter: counterReduce
    }
})

export type Store = ReturnType<typeof store.getState>