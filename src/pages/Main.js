import React, { useEffect } from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import { auth, db } from "../server/firebaseConfig";
import "../styles/Main.css";
import { useState } from "react";
import { collection, getDocs, onSnapshot  } from "firebase/firestore";
import AddPopUp from "./components/AddPopUp";
import { useNavigate } from "react-router-dom";

// setBirthdayList(birthdayList.docs.map(doc => doc.data()));
// const data = await db.collection('birthdays').get();
const Main = () => {
  const navigate = useNavigate();
  const [birthdayList, setBirthdayList] = useState([]);
  const [showAddPopUp, setShowAddPopUp] = useState(false);

  const birthdayRef = collection(db, "birthdays");

  const getBirthdaysList = async () => {
    try {
      const data = await getDocs(birthdayRef);
      const filteredData = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      setBirthdayList(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBirthdaysList();

    
    const unsubscribe = onSnapshot(birthdayRef, (snapshot) => {
      const updatedBirthdayList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBirthdayList(updatedBirthdayList);
    });

    return () => {
      
      unsubscribe();
    };
  }, []);

  const [birthdayCount, setBirthdayCount] = useState(0);

  const signOut = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };


  const closeAddPopUp = () => {
    setShowAddPopUp(false);
  };

  const userProfilePicture =
    auth.currentUser?.providerData[0]?.providerId === "google.com" &&
    auth.currentUser.photoURL
      ? auth.currentUser.photoURL
      : "../assets/default_profile_picture.png";

  const userProfileName =
    auth.currentUser?.providerData[0]?.providerId === "google.com" &&
    auth.currentUser.displayName
      ? auth.currentUser.displayName
      : "User";

  return (
    <div>
      {/* Maybe use mui-material*/}
      <div className="profile-wrapper">
        <img src={userProfilePicture} alt="" />
        <p>{userProfileName}</p>
        <button onClick={signOut}>Log out</button>
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
            id={birthday.id}
          />
        ))}

        {/*Conditional rendering of AddPopUp*/}
        {showAddPopUp && <AddPopUp onClose={closeAddPopUp} />}
      </div>

      <div
        className="button-plus"
        onClick={() => {
          setShowAddPopUp(!showAddPopUp);
        }}
      ></div>
    </div>
  );
};

export default Main;
