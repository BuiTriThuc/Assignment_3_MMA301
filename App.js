import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/home/HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./components/favorite/FavoriteScreen";
import Thuc from "./components/drawer/Stack";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Thuc"
          component={Thuc}
          options={{
            drawerLabel: () => null,
            title: null,
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favourite" component={FavoriteScreen} />
      </Drawer.Navigator>
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
