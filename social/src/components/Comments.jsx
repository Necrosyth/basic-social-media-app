import React, { useEffect, useState } from 'react'
import {collection, addDoc,query,onSnapshot,orderBy} from 'firebase/firestore'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'  

const Comments = (id) => {
  return (
    <>
      <div className="container my-3">
    <form>

  <div className="mb-3">
    {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
    <input  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <button type="submit" className="btn btn-primary">Add  Comment</button>
</form>
      </div>
    </>
  )
}

export default Comments