import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const InputContainer = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: white;
  width: 100%;
  padding: 20px;
  flex: 1;
  justify-content: center;
`;
export const Welcome = styled.Text`
  font-size: 30px;
  text-align: center;
`;
export const MuteText = styled.Text`
  color: gray;
  text-align: center;
  font-size: 17px;
`;
export const Input = styled(TextInput)`
  margin-top: 15px;
`;
export const AppButton = styled(Button)`
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;
export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
`;
