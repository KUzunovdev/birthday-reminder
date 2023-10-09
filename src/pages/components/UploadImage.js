import React from "react";
import { useState } from "react";
import { storage } from "../../server/firebaseConfig";
import {ref, uploadBytes} from "firebase/storage";
import { tr } from "date-fns/locale";
import "../../styles/UploadImage.css";







const UploadImage = ({onClose}) => {

    const handleImageUpload = async () => {

        if(fileUpload === null) return alert("Please select an image");
    
        
        const storageRef = ref(storage, `images/${fileUpload.name}`);
        try {
        await uploadBytes(storageRef, fileUpload);
        } catch (error) {
        console.error(error);
        }
    }

    const [fileUpload, setFileUpload] = useState(null);

    return (
        <div className="upload-popup">
        <div className="upload-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
          <button onClick={handleImageUpload} className="upload-button">Upload</button>
        </div>
      </div>
    )
}


export default UploadImage;