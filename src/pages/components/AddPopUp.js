import React from "react";
import { useState } from "react";
import "../../styles/AddPopUp.css";
import { collection, addDoc } from 'firebase/firestore';
import { fi } from "date-fns/locale";
import { db , auth} from "../../server/firebaseConfig";

const AddPopUp = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    //handle the date format 
    const handleAdd = async () => {
        try {
            const docRef = await addDoc(collection(db, "birthdays"), {
                name: name,
                date: date,
                userID: auth?.currentUser?.uid,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
           <input type="text" placeholder="Name"  onChange={(e) => setName(e.target.value)}/>
              <input type="text" placeholder="Date" onChange={(e)=> setDate(e.target.value)} />
              {/*add emoji or image upload feature */}
                <button onClick={handleAdd}>Add</button> 
        </div>
    )
}

export default AddPopUp;


