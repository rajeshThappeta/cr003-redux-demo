import React from 'react'
import './Home.css'
import {useSelector,useDispatch} from 'react-redux'
import {increment} from '../../slices/testSlice'

function Home() {

    let {a}=useSelector(state=>state.test)
    let dispatch=useDispatch();

    //call action creator functions

    function changeState(){
     let actionObj= increment(100)
     //dispatch actionObj to store
     dispatch(actionObj)
    }
   

  return (
    <div>Home
      <h1>a is {a}</h1>
      <button className="btn btn-success" onClick={changeState}>+</button>
    </div>
  )
}

export default Home