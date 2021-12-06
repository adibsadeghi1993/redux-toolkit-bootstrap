import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { saveDataInLocalStorage } from "../../services/AuthServices";

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://api.freerealapi.com/auth/register",
        user
      );
      if(data){
        saveDataInLocalStorage({...user,token:data.token})
    }
      return { ...user, data };
     
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);


export const login = createAsyncThunk(
    "auth/login",
    async (user, { rejectWithValue }) => {
      try {
          console.log(user)
        const { data } = await axios.post(
          "https://api.freerealapi.com/auth/login",
          user
        );
        console.log(data)
        
        if(data){
          saveDataInLocalStorage({...user,token:data.token})
      }
        return { ...user, data };
       
      } catch (error) {
          if(error.response.data.message==="NotFound Account"){
            return rejectWithValue("شما ثبت نام نکرده اید");
          }
          return rejectWithValue("ایمیل یا پسورد را اشتباه وارد کرده اید");
      }
    }
  );

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {
      name: "",
      email: "",
      token: "",
    },
    loading: false,
    erroeMessage: null,
    successMessage: "",
  },

  reducers:{
      loginByLocalStorage:(state,{payload})=>{
          state.userInfo=payload
      }
  },

  extraReducers: {
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.userInfo = payload;
      state.successMessage = "ثبت نام شما انجام شد";
      state.loading = false;
    },
    [signup.rejected]: (state, { payload, error }) => {
      console.log({ payload, error });
      return { loading: false, erroeMessage: payload, userInfo: {} };
    },
    [login.pending]: (state) => {
        state.loading = true;
        state.successMessage=""
        state.erroeMessage=""
      },
      [login.fulfilled]: (state, { payload }) => {
        console.log(payload);
        state.userInfo = payload;
        state.successMessage = "ورود شما انجام شد";
        state.loading = false;
      },
      [login.rejected]: (state, { payload, error }) => {
        console.log({ payload, error });
        return { loading: false, erroeMessage: payload, userInfo: {} };
      },
  },
});

export default AuthSlice.reducer;

export const {loginByLocalStorage}=AuthSlice.actions
