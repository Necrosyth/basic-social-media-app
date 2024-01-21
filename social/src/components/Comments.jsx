import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import displayComms from "./Display_Comms";

const Comments = (postId) => {
  const auth = getAuth();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(" ");

  useEffect(() => {
    const commentQuery = query(
      collection(db, "comments"),
      orderBy("time", "desc")
    );

    const fetchData = async () => {
      await onSnapshot(commentQuery, (snapshot) => {
        setComments(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };

    fetchData();
    console.log("Fetching comms", comments);
  }, []);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      await addDoc(collection(db, "comments"), {
        postId,
        comment: newComment,
        author: auth.currentUser.displayName,
        photoUrl: auth.currentUser.photoURL,
        userId: auth.currentUser.uid,
        time: new Date(),
      });
      setNewComment("");
    } else {
      alert("Login First!");
    }
  };
  const filteredComment = comments.filter((comment) => {
    return comment.postId === postId;
  });
  console.log("filtered", filteredComment);

  return (
    <>
      <div className="container my-3">
        <form onSubmit={handleAddComment}>
          <div className="mb-3">
            {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
            <input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Comment
          </button>
        </form>
        <h2>Total Comments {filteredComment.length}</h2>
        <br />
        {filteredComment.map((comment) => (
          <Display_Comms key={comment.userId} comment={comment} />
        ))}
       < displayComms/>
      </div>
    </>
  );
};

export default Comments;
