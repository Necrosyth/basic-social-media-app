import React from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const googleClick = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // console.log(result);
    const user = result.user;

    // to check if user already exist
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,  
        photourl: user.photoURL,
        timestamp: serverTimestamp(),
      });
    }
    navigate("/profile");
  };

  const logout = async () => {
    await auth.signOut();
    // console.log("signout");
    navigate("/");
  };

  return (
    <>
      <div className="nav_bar sticky-top">
        <Link to={"/"} className="left">
          {auth.currentUser ? (
            <>
              <img src={auth.currentUser?.photoURL} alt="" />
              <h3>{auth.currentUser?.displayName}</h3>
            </>
          ) : (
            <h2>Social-Connect</h2>
          )}
        </Link>
        <div className="right">
          <button onClick={googleClick} className="btn btn-warning mx-3">
            Login with Google
          </button>

          <Link to={"/post"} className="btn btn-warning mx-2">
            Post
          </Link>
          <Link to={"/profile"} className="btn btn-warning mx-2">
            Profile
          </Link>
          <Link to={"/users"} className="btn btn-warning mx-2">
            All Users
          </Link>
          <button onClick={logout} className="btn btn-warning mx-2">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
