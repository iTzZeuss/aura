import React from "react";
import { Redirect, router } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formGroup}>
        <Text className="font-pbold text-white text-[36px] text-center bottom-24">
          Create an account
        </Text>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#999"
          textContentType="username"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          textContentType="password"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          textContentType="emailAddress"
        />
        <CustomButton
          title={"Log in"}
          handlePress={() => router.replace("/(tabs)/home")}
        />
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161622", // your "bg-primary"
    padding: 16,
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
  },
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
    marginBottom: 18,
  },
  input: {
    width: 200,
    height: 48,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 30,
  },
});

export default SignUp;
