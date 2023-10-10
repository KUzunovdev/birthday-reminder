import React from "react";
import "../../styles/BirthdayContainer.css";
import { isBefore } from "date-fns";
import { doc, deleteDoc, Timestamp } from "firebase/firestore";
import {db} from "../../server/firebaseConfig";
import UploadImage from "./UploadImage";
import { useState } from "react";

//icons
import DeleteIcon from "@mui/icons-material/Delete"; 
import IconButton from "@mui/material/IconButton"; 
import Typography from "@mui/material/Typography";
import UploadIcon from "@mui/icons-material/Upload"; 


const BirthdayContainer = ({ name, imgURL, date, id }) => {

  //Calculate days left
  const currentDate = new Date();
  const birthdayDate = new Date(date);



  birthdayDate.setHours(0, 0, 0, 0);
 

 
  const currentYear = currentDate.getFullYear();

  
  birthdayDate.setFullYear(currentYear);

  console.log(birthdayDate);

  if (isBefore(birthdayDate, currentDate)) {
    birthdayDate.setFullYear(currentYear + 1);
  }

  
  console.log(currentDate);

  const timeDifference = birthdayDate.getTime() - currentDate.getTime();
  console.log(timeDifference);
  const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));

  //Delete function

  const handleDelete = async () => {
    const birthdayDoc = doc(db, "birthdays", id);
    await deleteDoc(birthdayDoc);
  }

  const [showUploadImage, setShowUploadImage] = useState(false);

  const toggleUploadImage = () => {
    setShowUploadImage(!showUploadImage);
  };

  return (
    <div className="birthday-container">
      <img src={imgURL} alt="" className="birthday-image" />
      <Typography variant="h6" className="birthday-name">
        {name}
      </Typography>
      <Typography variant="subtitle1" className="birthday-days">
        {daysLeft} days left
      </Typography>
      {showUploadImage && <UploadImage onClose={toggleUploadImage} />}
      <IconButton
        onClick={() => setShowUploadImage(!showUploadImage)}
        color="primary"
        aria-label="Upload Image"
      >
        
        <UploadIcon />
      </IconButton>
      <IconButton onClick={handleDelete} color="secondary" aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default BirthdayContainer;
