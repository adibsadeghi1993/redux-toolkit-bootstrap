import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const signup=createAsyncThunk(
    "signup",
    async(user)=>{
        return await axios.post("https://api.freerealapi.com/auth/register",user)
      
    }
)

const AuthSlice=createSlice({
    name:"auth",
    initialState:{
        auth:{
            name:"",
            email:"",
            token:""

        },
      loading:false,
      erroeMessage:"",
      successMessage:""
    },

    extraReducers:{

    }
})