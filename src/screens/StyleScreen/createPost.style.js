import { Button, Headline, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: white;
`;
export const Title = styled(Headline)`
  text-align: center;
`;
export const Input = styled(TextInput)`
  margin-top: 15px;
  background-color: white;
  font-size: 18px;
`;
export const AppButton = styled(Button)`
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;
export const SuccessText = styled.Text`
  color: green;
  font-size: 25px;
  text-align: center;
`;
