import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Header/Navbar";
import Header from "./Header/Header";
import Cart from "./Header/Cart";
import Home from "./Components/Home";

function App() {
  return (
    <div className='Hero-slide'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
