import React from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import {auth} from '../server/firebaseConfig';
import "../styles/Main.css";



const Main = () => {

  const handlePlus = () => {
    //add new birthday container with popup
  }

  
  const userProfilePicture = auth.currentUser?.providerData[0]?.providerId === "google.com" && auth.currentUser.photoURL
    ? auth.currentUser.photoURL
    : '../assets/default_profile_picture.png';

    const userProfileName = auth.currentUser?.providerData[0]?.providerId === "google.com" && auth.currentUser.displayName
    ? auth.currentUser.displayName
    : 'User';

  return (
    <div>
          <div className="profile-wrapper">
            <img src={userProfilePicture} alt=""/>
            <p>{userProfileName}</p>
          </div>

          <p></p>
          <hr></hr>

        {/* Add/ Remove BirthdayContainers*/}
         <BirthdayContainer />


         <div className="button-plus" onClick={handlePlus}></div>
    </div>
  );
}

export default Main;