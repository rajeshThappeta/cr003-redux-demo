import {createSlice} from '@reduxjs/toolkit';


export const testSlice=createSlice({
    name:'test',
    initialState:{a:100},
    reducers:{
        increment:(state,action)=>{
           console.log(action)
            state.a=state.a+action.payload;
        },
        decrement:(state,action)=>{
            state.a=state.a-1;
        }
    }
})

//create action creator functions
export const {increment,decrement}=testSlice.actions

//export default reducer
export default testSlice.reducer