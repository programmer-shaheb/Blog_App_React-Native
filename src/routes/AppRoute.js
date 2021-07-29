import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AccountScreen from "../screens/account.screen";
import BookMarkScreen from "../screens/bookmark.screen";
import CreatePostScreen from "../screens/createPost.screen";
import SearchScreen from "../screens/search.screen";
import HomeRoute from "./HomeRoute";
import BlogContextProvider from "../services/BlogData";

const Tab = createBottomTabNavigator();

const AppRoute = () => {
  return (
    <BlogContextProvider>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: "white" }}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "tomato",
          style: {
            backgroundColor: "white",
            borderTopWidth: 1,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
          component={HomeRoute}
        />
        <Tab.Screen
          name="BookMarks"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="bookmarks-outline" size={24} color={color} />
            ),
          }}
          component={BookMarkScreen}
        />
        <Tab.Screen
          name="CreatePost"
          options={({ navigation }) => ({
            tabBarIcon: () => (
              <Ionicons
                onPress={() => navigation.navigate("CreatePost")}
                name="add-circle-outline"
                size={50}
                color="black"
              />
            ),
          })}
          component={CreatePostScreen}
        />
        <Tab.Screen
          name="Search"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Account"
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="logout" size={24} color={color} />
            ),
          }}
          component={AccountScreen}
        />
      </Tab.Navigator>
    </BlogContextProvider>
  );
};
export default AppRoute;
