import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-6xl color-blue-600">Aura</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="color-black mt-96">
        Go to profile
      </Link>
    </View>
  );
}
