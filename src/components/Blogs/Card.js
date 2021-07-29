import React from "react";
import { Avatar, Chip, Card as CardItem, Title } from "react-native-paper";
import {
  Container,
  Profile,
  HeadlineContainer,
} from "../ComponentStyle/Card.style";

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
