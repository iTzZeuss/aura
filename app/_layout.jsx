import { StyleSheet, View, Text } from "react-native";
import { ExpoRoot, Slot, Stack } from "expo-router";
import "../global.css";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
