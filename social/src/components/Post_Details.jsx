import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import Comments from "./Comments";

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

  return (
    <>
    <h2 className="post-title">{data.title}</h2>
      <div className="container text-center my-3">
        <div className="post_detail">
          <div className="post_detail img">
          </div>
          <div className="post_detail img">
            <img src={data.imageUrl} alt="" width={500}/>
          </div>
          <div className="post_user img">
            <img src={data.photoUrl} alt="" />
          </div>
          <div className="post_usename">
            <h3>{data.author}</h3>
          </div>
          <div className="post_usename">
            <h3>{data.description}</h3>
          </div>
        </div>
        <Comments postId={id}/>
      </div>
    </>
  );
};

export default Post_Details;
