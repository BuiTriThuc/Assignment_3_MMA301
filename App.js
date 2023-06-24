import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import the desired icon library

import HomeScreen from "./components/home/HomeScreen";
import FavoriteScreen from "./components/favorite/FavoriteScreen";
import StackNavigator from "./components/Stack/Stack";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home"; // Icon for the Home screen
            } else if (route.name === "Favorite") {
              iconName = "heart"; // Icon for the Favorite screen
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null, // Hide the tab bar labels
        })}
      >
        <Tab.Screen
          name="Test"
          component={StackNavigator}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
