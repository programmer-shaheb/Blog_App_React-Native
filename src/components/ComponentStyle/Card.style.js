import styled from "styled-components/native";
import { Chip } from "react-native-paper";

export const Container = styled.Pressable`
  height: 320px;
  width: 320px;
  overflow: hidden;
  margin: 18px;
  padding-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const Profile = styled(Chip)`
  width: 50%;
  top: 20px;
  right: -10px;
`;

export const HeadlineContainer = styled.View`
  margin-top: 20px;
  padding: 5px;
`;
