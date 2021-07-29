import React, { useContext, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import { BlogContext } from "../../services/BlogData";
import Card from "./Card";

const Blogs = ({ navigation }) => {
  const { getAllBlogs, allBlogs, isSuccess } = useContext(BlogContext);

  useEffect(() => {
    getAllBlogs();
  }, [isSuccess]);

  return (
    <Container>
      <Title>News Feed</Title>
      <FlatList
        style={{ marginBottom: 150 }}
        data={allBlogs}
        renderItem={({ item }) => (
          <Card
            item={item}
            onPress={() => navigation.navigate("Reading", { item })}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
export default Blogs;

const Container = styled.View``;
const Title = styled.Text`
  font-size: 25px;
  color: #061649;
  padding-bottom: 10px;
  margin-left: 20px;
  text-align: center;
`;
