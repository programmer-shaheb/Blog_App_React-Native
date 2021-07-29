import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import SafeArea from "../components/SafeArea";
import { KeyboardAvoidingView, Platform } from "react-native";
import { BlogContext } from "../services/BlogData";
import { UserContext } from "../services/userData";
import {
  Container,
  Title,
  Input,
  AppButton,
  SuccessText,
} from "./StyleScreen/createPost.style";

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { onPostBlog, isSuccess, setIsSuccess } = useContext(BlogContext);
  const { userData } = useContext(UserContext);
  const { displayName, email, photoURL } = userData;

  const value = `Hi ${displayName}, What's On Your Mind..!`;

  if (isSuccess) {
    return (
      <SafeArea>
        <Container>
          <SuccessText>Your post was successful</SuccessText>
          <AppButton
            mode="contained"
            onPress={() => {
              setIsSuccess(false);
              setTitle("");
              setDescription("");
              navigation.navigate("CreatePost");
            }}
          >
            Create Post
          </AppButton>
          <StatusBar style="auto" backgroundColor="white" />
        </Container>
      </SafeArea>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeArea>
        <Container>
          <Title>Create A New Post</Title>
          <Input
            value={title}
            backgroundColor="white"
            placeholder="Give A Title"
            onChangeText={(text) => setTitle(text)}
          />
          <Input
            value={description}
            placeholder={value}
            backgroundColor="white"
            multiline
            numberOfLines={10}
            onChangeText={(text) => setDescription(text)}
          />
          <AppButton
            color="red"
            mode="contained"
            onPress={() =>
              onPostBlog(title, description, displayName, email, photoURL)
            }
          >
            Post
          </AppButton>
          <StatusBar style="auto" backgroundColor="white" />
        </Container>
      </SafeArea>
    </KeyboardAvoidingView>
  );
};
export default CreatePostScreen;
