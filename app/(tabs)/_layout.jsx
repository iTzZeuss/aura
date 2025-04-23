import { View, Text, Image } from "react-native";
import { Stack, Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View>
      <Image source={icon} />
    </View>
  );
};

const tabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{ headerShown: false, title: "Profile" }}
        />
        <Tabs.Screen
          name="create"
          options={{ headerShown: false, title: "Create" }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{ headerShown: false, title: "Saved" }}
        />
      </Tabs>
    </>
  );
};

export default tabsLayout;
