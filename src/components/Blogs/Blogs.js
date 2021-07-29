import React, { useContext, useEffect } from "react";
import { FlatList } from "react-native";
import { BlogContext } from "../../services/BlogData";
import Card from "./Card";
import { Container, Title } from "../ComponentStyle/Blogs.style";

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
