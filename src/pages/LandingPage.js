import React from "react";
import { auth, googleProvider } from "../server/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import birthdayCakeImage from "../assets/birthday_cake_ext.jpg";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";




const LandingPage = () => {

  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/main"); 
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="landing-container">
      <img src={birthdayCakeImage} alt="Birthday Cake" className="cake-image" />
      <h1>Never Miss a Birthday Celebration Again!</h1>
      <div className="button-wrapper">
        <button className="google-signin-button" onClick={signIn}>
          Sign in with Google
        </button>
        <button className="signup-button">Sign up</button>{" "}
        {/* Lead to signupPage */}
      </div>
    </div>
  );
};

export default LandingPage;
