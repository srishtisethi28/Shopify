import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.jpg'
const Navbar = () => {

    const [menu,setmenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" height="80px"/>
        <p>SHOPIFY</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setmenu("Home")}}><Link style={{textDecoration: 'none'}}to='/'>Home</Link> {menu ==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Men")}}><Link style={{textDecoration: 'none'}}to='/mens'>Mens</Link>  {menu ==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration: 'none'}}to='/womens'>Womens</Link> {menu ==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("Kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>  {menu ==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to ="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" height="60px" /></Link>
        
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
