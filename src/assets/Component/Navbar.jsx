 import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
      
      <Link to="/" className="logo">
        🍽️ RecipeFinder
      </Link>

      
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
       <NavLink to="/signpage" ><button className="signin-btn">Sign In</button></NavLink>
     </nav>
     </div>
  );
}

    
  
