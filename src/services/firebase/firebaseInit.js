// Functions in this file and parameters;
// firebase.app() => initializing the firebase app
// firestore() => initializing the firestore
// auth() => initializing the auth

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
