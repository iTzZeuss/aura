import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[370px] h-[370px]"
            resizeMode="contain"
          />

          <View className="relative items-center mt-[-20px]">
            <Text className="text-white font-bold text-2xl text-center">
              Get educated quickly from any book with{" "}
              <Text style={{ color: "#60A5FA", fontSize: 25 }}>Aura</Text>
            </Text>

            <Image
              source={images.path}
              className="absolute w-[130px] h-[100px] top-[4px] right-12"
              resizeMode="contain"
            />

            <View className="mt-10">
              <CustomButton
                handlePress={() => router.push("/sign-in")}
                title={"Continue with email."}
                containerStyles={""}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
