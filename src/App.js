import React from 'react';
import './App.css';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({ 
  
  // Initialize Firebase
  
  });

  const auth = firebase.auth();
  const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      
    </div>
  );
}



/*
restful


baza danni  - crud


birthday remainder app - 

description - daniel conegi make friends and influence people 
-easy add/remove birthdays
- friendly userinferface easy to use
- save all your friends birthdays in one place 
- short description of every person


future development

- custom desc based suggestion for message
- one click message sent(integration ig/messanger)
- login system
- mobile app
- collaborative 
 */

export default App;
