
// import firebase from './firebaseConfig';

// const auth = firebase.auth();
// const firestore = firebase.firestore();


// export const signIn = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider)
//   .then((userCredential) => {
//     const user = userCredential.user;
    
//   })
//   .catch((error) => {
//     console.error("Sign-in error:", error);
//   });
// }

// export const signUp = (email, password) => {
//     auth.createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       //redirect to main page
//     })
//     .catch((error) => {
//       console.error("Sign-up error:", error);
//     });
//   } 
  

// export const addBirthday = (birthday) => {
//   firestore.collection('birthdays').add(birthday);
// }

// export const deleteBirthday = (id) => {
//   firestore.collection('birthdays').doc(id).delete();
// }

// export const updateBirthday = (id, updatedBirthday) => {
//   firestore.collection('birthdays').doc(id).update(updatedBirthday);
// }


// export const signOut = () => {
//   auth.signOut();
// }