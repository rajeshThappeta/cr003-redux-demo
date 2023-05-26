//create loginSlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//api request
export const loginPromise = createAsyncThunk(
  "userLogin",
  async (userCredObj, thunkApi) => {
    let res = await axios.get(
      `http://localhost:4000/users?username=${userCredObj.username}`
    );
    console.log(res.data);
    return res.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: { userObj: null, loginStatus: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPromise.pending, (state, action) => {
        console.log("pending", action);
      })
      .addCase(loginPromise.fulfilled, (state, action) => {
        console.log("fulfilled", action);
        state.userObj=action.payload[0];
        state.loginStatus=true;

      })
      .addCase(loginPromise.rejected, (state, action) => {
        console.log("rejected", action);
        state.userObj={};
        state.loginStatus=false;

      });
  },
});

//export action creator functions
export const {} = loginSlice.actions;

//export defualt reducer
export default loginSlice.reducer;
