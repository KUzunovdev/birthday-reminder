import React from "react";
import BirthdayContainer from "./components/BirthdayContainer";
import AddButton from "./components/AddButton";



const Main = (props) => {
  return (
    <div>
          <div className="profile-wrapper">
            <img src="" alt=""/>
            <p>{props.name}</p>
          </div>

          <p></p>
          <hr></hr>


         <BirthdayContainer />


         <AddButton />
    </div>
  );
}

export default Main;