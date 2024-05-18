import {configureStore} from '@reduxjs/toolkit'
// configureStore always takes the object as the input  
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({})
