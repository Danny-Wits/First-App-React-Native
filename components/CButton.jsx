import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { isLoading } from "expo-font";

const CButton = ({ text, handlePress, className, isLoading }) => {
  return (
    <TouchableOpacity
      className={`h-fit w-fit px-10 py-5 bg-sky-400 rounded-lg ${className} ${
        isLoading ? "opacity-75" : ""
      }`}
      activeOpacity={0.5}
      disabled={isLoading}
      onPress={handlePress}
    >
      <Text className="text-white">{text}</Text>
    </TouchableOpacity>
  );
};

export default CButton;
