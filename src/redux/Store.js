import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from "./reducers/AuthReducer"
import ProductReducer from './reducers/ProductReducer'
import switchReducer from "./reducers/ModeReducer"

export const store = configureStore({
    reducer: {
     auth:AuthReducer,
     products:ProductReducer,
     switch:switchReducer
    },
   
  })