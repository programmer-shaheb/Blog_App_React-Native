import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import {
  Container,
  LongImage,
  Line,
  UserInfoContainer,
  BodyText,
  Headline,
} from "./StyleScreen/reading.style";

const ReadingScreen = ({ route }) => {
  const { blogImageUrl, title, description, displayName } = route.params.item;

  return (
    <Container>
      <Headline>{title}</Headline>
      <LongImage source={{ uri: blogImageUrl }} />
      <Line />
      <UserInfoContainer>
        <Text>Post By: {displayName}</Text>
      </UserInfoContainer>
      <BodyText>{description}</BodyText>
      <StatusBar translucent />
    </Container>
  );
};
export default ReadingScreen;
