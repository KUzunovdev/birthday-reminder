import React from "react";
import {auth} from '../server/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";
import cakeImage from "../assets/birthday_cake_ext.jpg";


const SignUpPage = () => {

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const signUp = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
       navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-container">
    <img src={cakeImage} alt="cake" className="cake-image"/>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-wrapper">
      <input
        placeholder="Email..."
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      </div>
      <div className="button-container">
        <button className="signup-button" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </div>
  </div>
  );
} 

export default SignUpPage;