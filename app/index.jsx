import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CButton from "../components/CButton";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

function index(props) {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView>
        <View className="h-[102vh] px-3 py-5 flex-1 flex-col gap-5 items-center justify-center bg-black text-white">
          <FontAwesome5 name="cloud" size={50} color={"#38bdf8"}></FontAwesome5>
          <Text className=" text-3xl font-bold text-white text-center">
            Weather Up
          </Text>
          <Text className="text mb-10 text-center">
            Be up to date with the weather and never be surprised by that storm
            or the Hot sun.
          </Text>
          <CButton
            text="View the Weather"
            handlePress={() => router.push("/main")}
          />
        </View>
      </ScrollView>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

export default index;
