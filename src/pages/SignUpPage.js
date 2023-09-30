import React from "react";
import {auth} from '../server/firebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


const SignUpPage = () => {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const signUp = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
         <input placeholder="Email..."  onChange={(e)=>{setEmail(e.target.value)}} />
         <input placeholder="Password..." type="password" onChange={(e)=>{setPassword(e.target.value)}} />
         <button>Sign Up</button>   
    </div>
  );
} 

export default SignUpPage;