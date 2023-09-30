import React from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import {auth} from '../server/firebaseConfig';
import "../styles/Main.css";

//img src = auth.currentUser.photoURL / if no photoURL, use default image
//auth.currentUser.displayName

const Main = () => {


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


         <div className="button-plus"></div>
    </div>
  );
}

export default Main;