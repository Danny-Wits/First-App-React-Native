import { View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import CButton from "../../components/CButton";
import { router } from "expo-router";

const signup = () => {
  return (
    <SafeAreaView className="h-full bg-black">
      <ScrollView>
        <View className="h-fit px-3 py-5 flex-1 flex-col gap-3 items-center justify-center bg-black ">
          <FontAwesome5 name="cloud" size={50} color={"#38bdf8"}></FontAwesome5>
          <Text className=" text-3xl font-bold text-white text-center mb-10">
            Weather Up
          </Text>

          <View className=" h-fit flex-1 flex-col justify-start gap-3 items-start w-full px-2">
            <Text className=" text-md font-semibold text-white text-center">
              Name
            </Text>
            <TextInput className="bg-slate-600 w-[90%] h-12 mb-5 p-2" />
            <Text className=" text-md font-semibold text-white text-center">
              Email
            </Text>
            <TextInput className="bg-slate-600 w-[90%] h-12 mb-5 p-2" />
            <Text className=" text-md font-semibold text-white text-center">
              Password
            </Text>
            <TextInput
              secureTextEntry={true}
              className="bg-slate-600 w-[90%] h-12 mb-5 p-2"
            />
            <Text className=" text-md font-semibold text-white text-center">
              Repeat Password
            </Text>
            <TextInput
              secureTextEntry={true}
              className="bg-slate-600 w-[90%] h-12 mb-5 p-2"
            />
            <View className="w-[90%] flex flex-col justify-center items-center gap-5">
              <CButton text="Sign In" />
              <Text
                onPress={() => router.push("/login")}
                className="w-fit text-md font-semibold text-white text-center  "
              >
                Already have a account ?
                <Text className="text-md  text-sky-400 text-center ">
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default signup;
