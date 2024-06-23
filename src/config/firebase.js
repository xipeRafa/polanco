import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyAp9XrnMQ2kd-L8I2kVOZJctYBAT-h66tM",
  authDomain: "polanco-25ef9.firebaseapp.com",
  projectId: "polanco-25ef9",
  storageBucket: "polanco-25ef9.appspot.com",
  messagingSenderId: "804200542961",
  appId: "1:804200542961:web:010ee2a2d4e45ec098af50"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();


