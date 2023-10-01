import React from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import {auth} from '../server/firebaseConfig';
import "../styles/Main.css";
import { useState } from "react";



const Main = () => {

  const handlePlus = () => {
    //add new birthday container with popup
  }
  const[birthdayCount, setBirthdayCount] = useState(0);

  const userProfilePicture = auth.currentUser?.providerData[0]?.providerId === "google.com" && auth.currentUser.photoURL
    ? auth.currentUser.photoURL
    : '../assets/default_profile_picture.png';

    const userProfileName = auth.currentUser?.providerData[0]?.providerId === "google.com" && auth.currentUser.displayName
    ? auth.currentUser.displayName
    : 'User';

  return (

    

    <div>
      {/* Maybe use mui-material*/}
          <div className="profile-wrapper">
            <img src={userProfilePicture} alt=""/>
            <p>{userProfileName}</p>
          </div>

          <p className="birthday-count">{birthdayCount} birthdays today</p>
          <hr></hr>

        {/* Add/ Remove BirthdayContainers*/}
        <div className="birthday-wrapper">
         <BirthdayContainer />
         </div>

         <div className="button-plus" onClick={handlePlus}></div>
    </div>
  );
}

export default Main;