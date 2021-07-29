import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import AppAvatar from "../components/AppAvatar";
import Blogs from "../components/Blogs/Blogs";
import SafeArea from "../components/SafeArea";
import { UserContext } from "../services/userData";
import { Container, Header } from "./StyleScreen/home.style";

const HomeScreen = ({ navigation }) => {
  const { userData } = useContext(UserContext);

  return (
    <SafeArea>
      <Container>
        <Header>
          <AppAvatar
            imageUri={userData.photoURL}
            onPress={() => navigation.navigate("Account")}
          />
        </Header>
        <Blogs navigation={navigation} />
      </Container>
      <StatusBar style="auto" backgroundColor="white" />
    </SafeArea>
  );
};
export default HomeScreen;
