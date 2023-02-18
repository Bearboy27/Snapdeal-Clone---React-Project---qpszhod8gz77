//import React, { Component } from 'react';
import React, {useState} from 'react'
import '../styles/App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../pages/Register';
//import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import CartHome from '../pages/CartHome';
import Menhome from '../pages/Menhome';
import Womenhome from '../pages/Womenhome';
import Ornamenthome from '../pages/Ornamenthome';

//import { CartProvider } from 'react-use-cart';


function App() {
  const [authenticated,setAuthenticated ] = useState(false)
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/register" element={<Register />}/>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/checkout" element={<Checkout/>}/>

      <Route path="/cart" element={<Cart/>}/>
      <Route path="/CartHome" element={<CartHome/>}/> 
      <Route path="/Menhome" element={<Menhome/>}/> 
      <Route path="/Womenhome" element={<Womenhome/>}/> 
      <Route path="/Ornamenthome" element={<Ornamenthome/>}/> 



      </Routes>
     </BrowserRouter>

  )
}

export default App
  /*state = {
    x: ''
  }
  handleScroll = () => {
    console.log('ok' + window.scrollY)
    if (window.scrollY >= 50) {
      //add
      this.setState({ x: 'position-fixed top-0 start-0' });
    } else {
      //remove
      this.setState({ x: '' });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }*/
