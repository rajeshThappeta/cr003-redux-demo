//create redux store
import {configureStore} from '@reduxjs/toolkit';
import testReducer from './slices/testSlice';
import loginReducer from './slices/loginSlice'


export  const store=configureStore({
    reducer:{
        test:testReducer,
        login:loginReducer
    }
})