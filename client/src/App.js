import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PostDetails from "./components/PostDetails/PostDetails";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import CreatorOrTag from "./components/CreatorOrTag/CreatorOrTag";

const PostRoute = () => <Navigate to="/posts" />;
const AuthRoute = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return !user ? <Auth /> : <Navigate to="/posts" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<PostRoute />} />

          <Route path="/posts" exact element={<Home />} />
          <Route path="/posts/search" exact element={<Home />} />
          <Route path="/posts/:id" exact element={<PostDetails />} />
          <Route path={"/creators/:name"} element={<CreatorOrTag />} />
          <Route path={"/tags/:name"} element={<CreatorOrTag />} />
          <Route path="/auth" exact element={<AuthRoute />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

// element={() => (!user ? <Auth /> : <Navigate to="/posts" />)}
{
  /* <Route path="/" exact element={() => <Navigate to="/posts" />} /> */
}

export default App;
