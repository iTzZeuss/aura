import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[370px] h-[370px] mr-8 -mt-[460px]"
          />
          <View className="relative -mt-[100px]">
            <Text className="text-white font-bold text-2xl text-center">
              Get educated quickly from any book with{" "}
              <Text className="text-blue-400 text-[25px]">Aura</Text>
            </Text>{" "}
            <Image
              source={images.path}
              className="absolute w-[130px] h-[100px] left-[153px] top-[5px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
