import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const profile = () => {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView>
        <View className="h-[102vh] px-3 py-5 flex-1 flex-col gap-5 items-center justify-center bg-black text-white">
          <FontAwesome5 name="cloud" size={50} color={"#38bdf8"}></FontAwesome5>
          <Text className=" text-3xl font-bold text-white text-center">
            Weather Up
          </Text>
          <Text className="text text-lg mb-10 text-center">
            Accounts are coming Soon
          </Text>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default profile;
