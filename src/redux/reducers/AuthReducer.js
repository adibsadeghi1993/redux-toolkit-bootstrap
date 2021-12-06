import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signup = createAsyncThunk(
  "auth/signup",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://api.freerealapi.com/auth/register",
        user
      );
      return { ...user, data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
    // axios
    //   .post("https://api.freerealapi.com/auth/register", user)
    //   .then((res) => {
    //     return { ...user, data: res.data };
    //   })
    //   .catch((err) => rejectWithValue([], err.response.data.message));
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

  extraReducers: {
    [signup.pending]: (state) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.userInfo = payload;
      state.successMessage = "you successfully signup";
      state.loading = false;
    },
    [signup.rejected]: (state, { payload, error }) => {
      console.log({ payload, error });
      return { loading: false, erroeMessage: payload, userInfo: {} };
    },
  },
});

export default AuthSlice.reducer;
