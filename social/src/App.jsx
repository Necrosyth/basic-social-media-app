import React from "react";
import Navbar from "./components/Navbar"; // Use PascalCase for component names
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add_Post from "./components/Add_Post";
import All_Users from "./components/All_Users";
import Get_Posts from "./components/Get_Posts";
import Post_Details from "./components/Post_Details";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Get_Posts />} />
          <Route path="/post" element={<Add_Post />} />
          <Route path="/post/:id" element={<Post_Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<All_Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
