import { getAuth } from 'firebase/auth'
import React from 'react'


const Profile = () => {
    const auth=getAuth() 
    console.log(auth.currentUser)
  return (
    <>
      <div className="container text-center">
        <div className="profile">
          <img src={auth.currentUser.photoURL} alt="" />
          <h3>
            {auth.currentUser.displayName}
          </h3>
         
        </div>
      </div>


    </>


  )
}

export default Profile