import React from "react";
import { Avatar, Chip, Card as CardItem, Title } from "react-native-paper";
import styled from "styled-components/native";

const Card = ({ item, onPress }) => {
  const { blogImageUrl, title, photoURL, displayName } = item;
  return (
    <Container onPress={onPress}>
      <CardItem>
        <Profile avatar={<Avatar.Image size={24} source={{ uri: photoURL }} />}>
          {displayName}
        </Profile>
        <HeadlineContainer>
          <CardItem.Cover source={{ uri: blogImageUrl }} />
          <Title numberOfLines={2}>{title}</Title>
        </HeadlineContainer>
      </CardItem>
    </Container>
  );
};
export default Card;

const Container = styled.Pressable`
  height: 320px;
  width: 320px;
  overflow: hidden;
  margin: 18px;
  padding-bottom: 10px;
`;

const Profile = styled(Chip)`
  width: 50%;
  top: 20px;
  right: -10px;
`;

const HeadlineContainer = styled.View`
  margin-top: 20px;
  padding: 5px;
`;
