import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "all/products",
  async (______,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:4000/products");
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
      products:[],
      loading: false,
      erroeMessage: null,
      cartItems:[]
     
    },

    reducer:{
        addToCart:(state,{payload})=>{
            state.cartItems.push(payload)
        }
    },

  
   
    extraReducers: {
      [fetchProducts.pending]: (state) => {
        state.loading = true;
      },
      [fetchProducts.fulfilled]: (state, { payload }) => {
        console.log(payload);
        state.products = payload;
        state.loading = false;
      },
      [fetchProducts.rejected]: (state, { payload, error }) => {
        console.log({ payload, error });
        return { loading: false, erroeMessage: payload, products: [] };
      },
   
    },
  });
  export default productsSlice.reducer;

  

  
