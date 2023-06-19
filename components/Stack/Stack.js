import React from "react";
import HomeScreen from "../home/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../detail/DetailScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Thuc" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}
