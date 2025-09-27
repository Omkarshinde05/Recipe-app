import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
     const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
     if (email&&password) {
           localStorage.setItem( "userdata", JSON.stringify({
                email,
                password
            } )); 
            
            alert("Registration Successfully Please Login")
              navigate('/')
              
        }else{
            alert("All fields are required")
        } }  
    
           
  return (
    <div className="signin-container">
      <div className="signin-box">

        <div className="signin-header">
          <h1>RecipeFinder</h1>
          <p>Sign in to continue</p>
        </div>

        
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign In</button>
        </form>

      
        <div className="extra-links">
          <p>
            Don’t have an account? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
