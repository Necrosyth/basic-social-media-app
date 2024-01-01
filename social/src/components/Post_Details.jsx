import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const Post_Details = () => {
  const { id } = useParams();
  // console.log(useParams())
  const [data, setData] = useState("");

  useEffect(() => {
    const getSingleDoc = async (id) => {
      const ref = doc(db, "post", id);
      getDoc(ref).then((doc) => setData(doc.data()));
    };
    getSingleDoc(id);
    console.log("Single doc", data);
  }, [id]);

  return <div>The ID is {id}</div>;
};

export default Post_Details;
