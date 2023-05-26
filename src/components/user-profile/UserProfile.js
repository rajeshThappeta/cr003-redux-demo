import React from 'react'
import './UserProfile.css'
import {useSelector} from 'react-redux'

function UserProfile() {

  let {userObj}=useSelector(state=>state.login)
  return (
    <div>
      <h1 className="text-end">{userObj.username}</h1>
    </div>
  )
}

export default UserProfile