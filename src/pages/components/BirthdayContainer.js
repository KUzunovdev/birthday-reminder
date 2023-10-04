import React from "react";
import "../../styles/BirthdayContainer.css";
import { isBefore } from "date-fns";

const BirthdayContainer = ({name, imgURL, date}) => {

  const currentDate = new Date();

  const birthdayDate = new Date(date);
  

   const currentYear = currentDate.getFullYear();

  
  birthdayDate.setFullYear(currentYear);

  
  if (isBefore(birthdayDate, currentDate)) {
    birthdayDate.setFullYear(currentYear + 1);
  }

  
  const timeDifference = birthdayDate.getTime() - currentDate.getTime();
  const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));




  return (
    <div className="birthday-container">
      <img src={imgURL} alt="" className="birthday-image" />
      <p className="birthday-name">{name}</p>
      <p className="birthday-days">{daysLeft}</p>
    </div>
  );
};

export default BirthdayContainer;
