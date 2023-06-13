/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Mobile from './Mobile';
import Home from './../pages/Home';
import Television from './Television';
import { useSelector } from 'react-redux';


export default function Header() {

  const {cartItems} = useSelector((state)=>state.cart);
  const {wishListItems} = useSelector((state)=>state.wishlist);

  const cartQuantity = cartItems.length;
  const wishlistQuantity = wishListItems.length;

  return (
    <>
    <Router>
        <nav className="navbar navbar-expand-lg bg-info pb-3 fixed-top">
  <div className="container">
    <img src='../images/logo2.png' className='logo-img'/>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5"> 
  
      <li className="nav-item mt-2">
          <Link to="/" className='custom-header mx-4'><b>Home</b></Link>
        </li>
        <li className="nav-item mt-2">
          <Link to="/mobile" className='custom-header mx-4'><b>Mobile</b></Link>
        </li>
        <li className="nav-item mt-2">
          <Link to="/television" className='custom-header mx-4'><b>Television</b></Link>
        </li>
      </ul>
      
      <form className="d-flex">
      <i className="fa-solid fa-cart-shopping me-5 mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><div class="position-absolute top-25 translate-middle badge rounded-pill bg-danger ms-2">{cartQuantity}</div></i>
      <i className="fa-solid fa-heart me-5 mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop1"><div class="position-absolute top-25 translate-middle badge rounded-pill bg-danger ms-2">{wishlistQuantity}</div></i>    
      </form>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mobile" element={<Mobile/>}/>
        <Route path="/television" element={<Television/>}/>
      </Routes>
</Router>
    </>
  )
}