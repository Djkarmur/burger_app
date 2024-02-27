import { useState } from 'react'
import * as React from "react";
import { createRoot } from "react-dom/client";

import {Routes,Route,Link} from "react-router-dom";
import Home from './Home';
import Order from './Order';
import Burger from './Burger';
import './App.css'





function App() {
  
  return (
    <>
    <h2>YourOwn Burger</h2>
    <div className='navbar'>
    <Link to='/'>Home</Link>
    <Link to='/order'>Order</Link>
    </div>
    
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
      
      
    </>
  )
}

export default App
