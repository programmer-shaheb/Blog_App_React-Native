// Functions in this file and parameters;
// firebase.app() => initializing the firebase app
// firestore() => initializing the firestore
// auth() => initializing the auth

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqOBQNTMzfPgf9mTLmykDnY_JvTKHUavI",
  authDomain: "social-blog-app-7b23b.firebaseapp.com",
  projectId: "social-blog-app-7b23b",
  storageBucket: "social-blog-app-7b23b.appspot.com",
  messagingSenderId: "806069075685",
  appId: "1:806069075685:web:40a4a897a74a76b4a89e0c",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = app.auth();

export { db, auth };
