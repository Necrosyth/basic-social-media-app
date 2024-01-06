import { getAuth } from 'firebase/auth'
import React from 'react'


const Profile = () => {
    const auth=getAuth() 
    console.log(auth.currentUser)
  return (
    <>
  <div
  className="ui-bg-cover ui-bg-overlay-container text-white"
  
>
  <div className="ui-bg-overlay bg-dark opacity-50" />
  <div className="container">
    <div className="text-center py-5">
      <img
        src={auth.currentUser.photoURL}
        alt=""
        className="ui-w-100 rounded-circle"
      />
      <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
        <h4 className="font-weight-bold my-4">{auth.currentUser.displayName}</h4>
        <div className="opacity-75 mb-4">
          Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum
          primis electram duo, porro principes ei has.
        </div>
      </div>

    </div>
  </div>
  <div className="ui-bg-overlay-container">
</div> 

 <div className="ui-bg-overlay bg-dark opacity-25" />
    {/* <ul className="nav nav-tabs tabs-alt justify-content-center border-transparent">
      <li className="nav-item">
        <a
          className="nav-link text-white py-4 active"
          href="javascript:void(0)"
        >
          Posts
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white py-4" href="javascript:void(0)">
          Likes
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white py-4" href="javascript:void(0)">
          Followers
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white py-4" href="javascript:void(0)">
          Following
        </a>
      </li>
    </ul> */}
  </div>



    </>


  )
}

export default Profile