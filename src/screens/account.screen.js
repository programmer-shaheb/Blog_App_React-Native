import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Button } from "react-native-paper";
import { Container } from "./StyleScreen/account.style";
import SafeArea from "../components/SafeArea";
import { UserContext } from "../services/userData";

const AccountScreen = () => {
  const { onSignOutUser } = useContext(UserContext);
  return (
    <SafeArea>
      <Container>
        <Button mode="contained" onPress={() => onSignOutUser()} color="red">
          Log Out
        </Button>
        <StatusBar style="auto" backgroundColor="white" />
      </Container>
    </SafeArea>
  );
};
export default AccountScreen;
