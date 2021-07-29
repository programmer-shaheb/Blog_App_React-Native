import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { Button } from "react-native-paper";
import ErrorMessage from "../components/ErrorMessage";
import { UserContext } from "../services/userData";
import {
  InputContainer,
  Welcome,
  Input,
  AppButton,
  MuteText,
  TextContainer,
} from "./StyleScreen/register.style";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, setError, onCreateUser } = useContext(UserContext);

  return (
    <>
      <InputContainer>
        <Welcome>Sign Up</Welcome>
        <Input
          value={name}
          autoCompleteType="name"
          label="Name"
          mode="outlined"
          left={<Input.Icon name="account" />}
          onChangeText={(text) => setName(text)}
        />
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
          onPress={() => onCreateUser(name, email, password)}
        >
          Sign Up
        </AppButton>
        <TextContainer>
          <MuteText>Already have an account?</MuteText>
          <Button
            color="red"
            onPress={() => {
              navigation.navigate("SignIn");
              setError(null);
            }}
          >
            Sign In
          </Button>
        </TextContainer>
      </InputContainer>
      <StatusBar translucent />
    </>
  );
};
export default RegisterScreen;
