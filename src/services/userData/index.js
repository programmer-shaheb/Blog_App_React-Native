// Functions in this file and parameters;
// createUser() =>  create a new user with firebase sign in
// signInUser() => sign in for old user
// signOutUser() => sign out an user

import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebaseInit";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);

  const createUser = (name, email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user
          .updateProfile({
            displayName: name,
            photoURL:
              "https://thumbs.dreamstime.com/b/creative-illustration-default-avatar-profile-placeholder-isolated-background-art-design-grey-photo-blank-template-mockup-144847501.jpg",
          })
          .then(() => {
            setUserData(user);
          })
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUser = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setUserData(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signOutUser = () => {
    auth.signOut();
    setUserData({});
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        error,
        setError,
        onCreateUser: createUser,
        onSignInUser: signInUser,
        onSignOutUser: signOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
