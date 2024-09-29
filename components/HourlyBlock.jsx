import { View, Text } from "react-native";
import React from "react";

const HourlyBlock = ({ time, values }) => {
  const date = new Date(time);
  const hour = date.getUTCHours();
  const standardTime = hour > 12 ? hour - 12 + " PM" : hour + "AM";
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with 0 if needed
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed) and pad with 0
    const year = date.getFullYear(); // Get the full year

    return `${day}/${month}/${year}`;
  };
  return (
    <View className="w-[60vw] flex flex-col justify-start  items-start px-2 py-3 gap-2 m-5 h-full rounded-lg bg-slate-700 shadow-2xl ">
      <Text className="text">Date: {formatDate(date)}</Text>
      <Text className="text">Time: {standardTime}</Text>
      <Text className="text">Humidity: {values.humidity}</Text>
      <Text className="text">
        Chance of Rain : {values.precipitationProbability}
      </Text>
      <Text className="text">UV Index: {values.uvIndex}</Text>
      <Text className="text">Temperature: {values.temperature}</Text>
      <Text className="text">Feel's Like : {values.temperatureApparent}</Text>
    </View>
  );
};

export default HourlyBlock;
