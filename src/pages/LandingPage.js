import React from "react";
import { signIn, signUp } from "../FireBase/firebaseFunctions";





const LandingPage = () => {
  return (
    <div>
            <img src="" alt=""></img>
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