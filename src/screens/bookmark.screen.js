import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";

const BookMarkScreen = () => {
  return (
    <SafeArea>
      <Container>
        <MuteText>Bookmark Screen</MuteText>
        <StatusBar style="auto" backgroundColor="white" />
      </Container>
    </SafeArea>
  );
};
export default BookMarkScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const MuteText = styled.Text`
  color: gray;
  font-size: 17px;
  position: absolute;
  bottom: 250px;
`;
