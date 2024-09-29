import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "skyblue",
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tabs.Screen
          name="main"
          options={{
            title: "HOME",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="home" size={22} color={color} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user" size={22} color={color} />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
};

export default TabLayout;
