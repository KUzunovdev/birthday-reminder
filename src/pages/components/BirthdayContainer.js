import React from "react";
import "../../styles/BirthdayContainer.css";
import { isBefore } from "date-fns";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../../server/firebaseConfig";


const BirthdayContainer = ({ name, imgURL, date, id }) => {

  //Calculate days left
  const currentDate = new Date();
  const birthdayDate = new Date(date);

  const currentYear = currentDate.getFullYear();

  birthdayDate.setFullYear(currentYear);

  if (isBefore(birthdayDate, currentDate)) {
    birthdayDate.setFullYear(currentYear + 1);
  }

  const timeDifference = birthdayDate.getTime() - currentDate.getTime();
  const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));

  //Delete function

  const handleDelete = async () => {
    const birthdayDoc = doc(db, "birthdays", id);
    await deleteDoc(birthdayDoc);
  }

  return (
    <div className="birthday-container">
      <img src={imgURL} alt="" className="birthday-image" />
      <p className="birthday-name">{name}</p>
      <p className="birthday-days">{daysLeft}</p>
      <button className="birthday-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BirthdayContainer;
