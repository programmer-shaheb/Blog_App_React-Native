// Functions in this file and parameters;
// postBlog(title, description, displayName, email, photoURL) // create a post
// postBlog(postID) // returns all post

import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { db } from "../firebase/firebaseInit";
import { blogImageUrl } from "../mockData";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);

  const postBlog = (title, description, displayName, email, photoURL) => {
    db.collection("blogs")
      .add({
        blogImageUrl: blogImageUrl[Math.floor(Math.random() * 8)],
        title,
        description,
        displayName,
        email,
        photoURL,
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        Alert.alert("Error Adding Post: ", error.message);
      });
  };

  const getAllBlogs = () => {
    db.collection("blogs")
      .get()
      .then((snapshot) => {
        const blogs = [];
        snapshot.docs.map((doc) =>
          blogs.unshift({ ...doc.data(), id: doc.id })
        );
        setAllBlogs(blogs);
      })
      .catch((err) => Alert.alert("Didn't Get The Data: ", err.message));
  };

  return (
    <BlogContext.Provider
      value={{
        onPostBlog: postBlog,
        isSuccess,
        setIsSuccess,
        getAllBlogs,
        allBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;
