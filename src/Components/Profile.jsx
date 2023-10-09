/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
 
  return (
    <div>
    if (!user) return <div> Please Login  </div>
    return <h3>userName : {user.userName} </h3>

    </div>
  )
}

export default Profile