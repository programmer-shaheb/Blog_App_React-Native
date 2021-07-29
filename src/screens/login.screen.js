import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { UserContext } from "../services/userData";
import {
  InputContainer,
  AppButton,
  Welcome,
  Input,
} from "./StyleScreen/login.style";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, onSignInUser } = useContext(UserContext);

  return (
    <>
      <InputContainer>
        <Welcome>Sign In</Welcome>
        <Input
          value={email}
          autoCapitalize="none"
          autoCompleteType="email"
          label="Email"
          mode="outlined"
          left={<Input.Icon name="email" />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          value={password}
          autoCapitalize="none"
          label="Password"
          mode="outlined"
          secureTextEntry
          left={<Input.Icon name="lock" />}
          onChangeText={(text) => setPassword(text)}
        />
        <ErrorMessage error={error} />
        <AppButton
          color="red"
          mode="contained"
          onPress={() => onSignInUser(email, password)}
        >
          Sign In
        </AppButton>
        <AppButton
          color="red"
          mode="outlined"
          onPress={() => {
            navigation.navigate("SignUp");
            setError(null);
          }}
        >
          Sign Up
        </AppButton>
      </InputContainer>
      <StatusBar translucent />
    </>
  );
};
export default LoginScreen;
