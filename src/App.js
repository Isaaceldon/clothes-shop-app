import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";
import "jquery";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import DetailsClothe from "./components/DetailsClothe";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import { UserContext } from "./Helpers/UserContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="details/:id" element={<DetailsClothe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
