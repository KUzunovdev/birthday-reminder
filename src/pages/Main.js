import React, { useEffect } from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import {auth ,db} from '../server/firebaseConfig';
import "../styles/Main.css";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import AddPopUp from "./components/AddPopUp";

// setBirthdayList(birthdayList.docs.map(doc => doc.data()));
// const data = await db.collection('birthdays').get();
const Main = () => {


  const[birthdayList, setBirthdayList] = useState([]);
  

  const birthdayRef = collection(db, "birthdays");

  useEffect(() => {
    const getBirthdaysList = async () => {

      try{
      const data = await getDocs(birthdayRef);  
      const filteredData = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      setBirthdayList(filteredData);
      console.log(filteredData);                        
      } catch (err) {
        console.log(err);
      } 
    };

    getBirthdaysList();
  }, []);

  
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
          {birthdayList.map((birthday) => (
          <BirthdayContainer
            key={birthday.id}
            name={birthday.name}
            img={birthday.imgURL}
            date={birthday.birthDate}
            />
          ))}

          {/*Conditional rendering of AddPopUp*/}
          
         
         </div>

         <div className="button-plus" onClick={}></div>
    </div>
  );
}

export default Main;