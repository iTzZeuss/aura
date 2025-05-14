import React from "react";
import { Redirect, router } from "expo-router";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      {" "}
      <Image
        source={images.logo}
        className="w-[220px] h-[220px] bottom-[110px] left-[56px]"
        resizeMode="contain"
      />
      <View style={styles.formGroup}>
        <Text className="font-pbold text-white text-[28px] text-start bottom-10">
          Log in to Aura
        </Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#b4b4b4"
          textContentType="username"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#b4b4b4"
          textContentType="password"
        />
        <CustomButton
          title={"Log in"}
          handlePress={() => router.replace("/(tabs)/home")}
        />
      </View>
      <StatusBar backgroundColor="#161622" style="light" containerStyles="" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622",
    padding: 16,
  },
  formGroup: {
    width: "100%",
    marginTop: -110,
  },
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 13,
  },
  input: {
    width: 350,
    height: 48,
    backgroundColor: "#2a2a2e",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 27,
  },
});

export default SignIn;
