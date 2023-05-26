import React, { useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";

import { useForm, UseForm } from "react-hook-form";
import {loginPromise} from '../../slices/loginSlice'
import {useNavigate} from 'react-router-dom'

function Login() {
  let { userObj,loginStatus } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let { register, handleSubmit } = useForm();
  let navigate=useNavigate();

  function login(userCredObj) {
    
    let actionObj=loginPromise(userCredObj)
    dispatch(actionObj)
  }


    useEffect(()=>{
      if(loginStatus===true){
      navigate('/user-profile')
      }
    },[loginStatus])


  return (
    <div>
      Login
      <form onSubmit={handleSubmit(login)}>
      <input
        type="text"
        {...register("username")}
        id=""
        className="form-control mb-3"
        placeholder="Username"
      />
      <input
        type="text"
        {...register("password")}
        id=""
        className="form-control mb-3"
        placeholder="Password"
      />
      <button type="submit" className="btn btn-success">
        Login
      </button>
      </form>
    </div>
  );
}

export default Login;
