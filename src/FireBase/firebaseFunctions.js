import { auth, firestore } from './firebaseConfig';
import firebase from 'firebase/app';

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

export const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
}


export const addBirthday = (birthday) => {
  firestore.collection('birthdays').add(birthday);
}

export const deleteBirthday = (id) => {
  firestore.collection('birthdays').doc(id).delete();
}

export const updateBirthday = (id, updatedBirthday) => {
  firestore.collection('birthdays').doc(id).update(updatedBirthday);
}


export const signOut = () => {
  auth.signOut();
}