import React from 'react';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Main from './pages/Main';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
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
