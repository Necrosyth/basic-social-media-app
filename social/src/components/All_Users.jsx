import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase.config";
// import {  Convert_Date_Time} from "./Convert_Date_Time.jsx"

const All_Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userQuery = query(collection(db, "users"), orderBy("timestamp", "desc"));

    const fetchData = async () => {
      await onSnapshot(userQuery, (snapshot) => {
        setUsers(
          snapshot.docs.map((doc) => ({ 
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <div key={user.id} className="text-center my-3 all_user_con">
          <div className="all_users ">
            <img src={user.photoUrl} alt="" />
            <h3>{user.name}</h3>
            <h6>{user.email}</h6>
          </div>
          <Convert_Date_Time
            text="Register Time :- "
            seconds={user.timestamp?.seconds}
            nanoseconds={user.timestamp?.nanoseconds}
          />
        </div>
      ))}
    </div>
  );
};

export default All_Users;
