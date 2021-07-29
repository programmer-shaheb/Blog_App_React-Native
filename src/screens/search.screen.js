import { StatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import SafeArea from "../components/SafeArea";

const SearchScreen = () => {
  return (
    <SafeArea>
      <Container>
        <Searchbar placeholder="Search" />
        <StatusBar style="auto" backgroundColor="white" />
      </Container>
    </SafeArea>
  );
};
export default SearchScreen;

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding: 20px;
`;
