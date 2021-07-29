import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;
export const LongImage = styled.Image`
  width: 100%;
  height: 400px;
  border-width: 1px;
  border-color: lightgray;
`;
export const Headline = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
`;
export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: lightgray;
`;
export const UserInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const BodyText = styled.Text`
  padding: 10px;
  text-align: justify;
  font-size: 17px;
`;
