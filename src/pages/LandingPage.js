import React from "react";
import { signIn, signUp } from '../server/firebaseFunctions'
import birthdayCakeImage from "../assets/birthday_cake_ext.jpg";






const LandingPage = () => {
  return (
    <div>
            <img src={birthdayCakeImage} alt="Birthday Cake"></img>
            <h1>Never Miss a Birthday
            Celebration Again!</h1>
            <div className="button-wrapper">      
            <button onClick={signIn}>Sign in</button>
            <button onClick={signUp}>Sign up</button>
            </div> 
    </div>
  );
}

export default LandingPage;