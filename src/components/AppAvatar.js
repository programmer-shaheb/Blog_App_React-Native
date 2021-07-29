import React from "react";
import { Container } from "./ComponentStyle/AppAvatar.style";
import { Avatar } from "react-native-paper";

const AppAvatar = ({ imageUri, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Avatar.Image
        style={{ backgroundColor: "white" }}
        size={50}
        source={{ uri: imageUri }}
      />
    </Container>
  );
};
export default AppAvatar;
