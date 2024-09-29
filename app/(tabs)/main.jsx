import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import CButton from "../../components/CButton";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "@rneui/base";
import HourlyBlock from "../../components/HourlyBlock";
import SyncStorage from "sync-storage";
const main = () => {
  const [location, setLocation] = useState("");
  const [searching, setSearching] = useState(false);
  const [data, setData] = useState(null);
  const options = { method: "GET", headers: { accept: "application/json" } };

  async function fetchWeather() {
    const locationName = location.trim().replace(/[\s\t]+/g, "%20");
    // if (locationName.length == 0) return;
    const query = `https://api.tomorrow.io/v4/weather/forecast?location=${locationName}&timesteps=hourly&apikey=cWMiIPrzFt7kzYOpr4nxAKLpHQXxiLEz`;
    console.log(locationName);
    try {
      setSearching(true);
      const response = await axios.get(query, options);
      // setSearching(false);
      // console.log(SyncStorage.set("b", response.data));
      setSearching(false);
      // console.log(response.data);
      // console.log(response.data.timelines.hourly);
      // setData((prev) => SyncStorage.get("b"));
      setData((prev) => response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView>
        <View className="min-h-screen px-4 py-5 flex flex-col gap-5 items-center justify-start bg-black text-white">
          <FontAwesome5 name="cloud" size={50} color={"#38bdf8"}></FontAwesome5>
          <Text className=" text-3xl font-bold text-white text-center">
            Weather Up
          </Text>
          <Text className="text">
            Search for hourly weather forecast of your location
          </Text>
          <View className=" w-full  flex flex-row  justify-center">
            <Input
              value={location}
              onChangeText={setLocation}
              containerStyle={{
                width: "80%",
              }}
              placeholder="Enter the location"
              inputStyle={{ color: "white" }}
              returnKeyType="search"
              onSubmitEditing={fetchWeather}
            ></Input>
            {searching ? (
              <FontAwesome5
                name="stopwatch"
                size={30}
                color={"#38bdf8"}
              ></FontAwesome5>
            ) : (
              <FontAwesome5
                onPress={fetchWeather}
                name="search-location"
                size={30}
                color={"#38bdf8"}
              ></FontAwesome5>
            )}
          </View>

          <View className="h-fit w-full p-5 bg-gray-800 pb-30 ">
            {data ? (
              <Text className="text text-2xl text-center">
                {data.location.name}
              </Text>
            ) : (
              <></>
            )}
            {data ? (
              <FlatList
                className=""
                data={data.timelines.hourly}
                renderItem={({ item }) => (
                  <HourlyBlock
                    time={item.time}
                    values={item.values}
                    key={item.time}
                  ></HourlyBlock>
                )}
                horizontal
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>

      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default main;
