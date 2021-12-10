import { createSlice } from "@reduxjs/toolkit";

import { getProductsFromLocalStorage, saveProductsInLocalStorage, saveTotalPriceInLocalStorage } from "../../services/ProductServices";



const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    erroeMessage: null,
    cartItems: [],
    totalPrice:0,
    filteredProducts:[]
  },

  reducers: {
    getAllProducts:(state,{payload})=>{
      state.products=payload
    },
    addToCart: (state, { payload }) => {
      console.log(payload)
      const exist=state.cartItems.findIndex(item=>item.id===payload.id)
      console.log(exist)
      if (exist !== -1) {
        
        const newCartItems = [...state.cartItems];
        
      const findItem = newCartItems.find((item) => item.id === payload.id);
      const newItem = { ...findItem, qty: findItem.qty + 1 };
      const index = newCartItems.indexOf(findItem);
      newCartItems[index] = newItem;
    
      state.cartItems = newCartItems;
      saveProductsInLocalStorage(state.cartItems)
      console.log(state.cartItems)
      }
      if ( exist === -1) {
        const newItem = { ...payload, qty: 1 };
         const updatedCart=[...state.cartItems,newItem]
       state.cartItems=updatedCart
       console.log(state.cartItems)
       saveProductsInLocalStorage(state.cartItems)
 
      }
     
     
    },
    increaseQty: (state, { payload }) => {
      const newCartItems = [...state.cartItems];
      const findItem = newCartItems.find((item) => item.id === payload);
      const newItem = { ...findItem, qty: findItem.qty + 1 };
      const index = newCartItems.indexOf(findItem);
      newCartItems[index] = newItem;
      state.cartItems = newCartItems;
      saveProductsInLocalStorage(state.cartItems)
    },
    decreaseQty: (state, { payload }) => {
      const newCartItems = [...state.cartItems];
      const findItem = newCartItems.find((item) => item.id === payload);
      const newItem = { ...findItem, qty: findItem.qty - 1 };
      const index = newCartItems.indexOf(findItem);
      if (newItem.qty < 1) {
        const updatedCart = newCartItems.filter((item) => item.id !== payload);
        state.cartItems = updatedCart;
        saveProductsInLocalStorage(state.cartItems)
      } else {
        newCartItems[index] = newItem;
        state.cartItems = newCartItems;
        saveProductsInLocalStorage(state.cartItems)
      }
    },
    TotalPrice:(state,action)=>{
      const cartItems=getProductsFromLocalStorage()
      const totalPrice=cartItems?.reduce((a,c)=>a+c.dPrice*c.qty,0)
      state.totalPrice=totalPrice
      saveTotalPriceInLocalStorage(totalPrice)
    },
    filterProducts:(state,{payload})=>{
      const mainProducts = [...state.products];
       const {range,select,sort,search,checkedValue}=payload

       const filteredAllProducts = mainProducts.filter((product) => {
        if (search && !product.title.includes(search)) {
          return false;
        }
        if (checkedValue?.length && !checkedValue.includes(product.title)) {
          return false;
        }
        if (range && product.mainPrice < range[0] ) {
          return false;
        }
        if (range && product.mainPrice > range[1] ) {
          return false;
        }
        if (select === "all") {
          return true;
        }
        if (select && product.category !== select) {
          return false;
        }
  
        return true;
      });
  
      if(sort && sort==="1"){
        const sortedAsendingProducts=filteredAllProducts.sort((a,b)=>a.dPrice-b.dPrice)
         state.filteredProducts=sortedAsendingProducts
      }
      if(sort && sort==="0"){
        const sortedDesendingProducts=filteredAllProducts.sort((a,b)=>b.dPrice-a.dPrice)
          state.filteredProducts=sortedDesendingProducts
      }
      if(!sort){
        state.filteredProducts=filteredAllProducts  
      }
    }
  },


});

export const {getAllProducts, addToCart, increaseQty,decreaseQty,TotalPrice,filterProducts} = productsSlice.actions;
export default productsSlice.reducer;
