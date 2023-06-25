import React, { useEffect, useState } from "react";
import { View, Switch, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreenData from "../data/HomeScreenData";

const SwitchAdd = ({ product }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [listFavourite, setListFavourite] = useState([]);

  console.log("Check product", product.favorite);

  const getFavouriteList = async () => {
    try {
      // Get favorites from AsyncStorage
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        // Parse the favorites from AsyncStorage
        const parsedFavorites = JSON.parse(favorites);

        // Update the listFavourite state
        setListFavourite(parsedFavorites);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addItemFavourite = async (item) => {
    try {
      let favourites = [...listFavourite];
      const existingFavorites = await AsyncStorage.getItem("favorites");

      if (existingFavorites) {
        favourites = JSON.parse(existingFavorites);
      }

      const isItemExist = favourites.some((fav) => fav.id === item.id);

      if (!isItemExist) {
        favourites.push(item);
        await AsyncStorage.setItem("favorites", JSON.stringify(favourites));
        setListFavourite(favourites);
        setIsEnabled(true);
        console.log("Check list add", listFavourite);
      } else {
        const updatedList = listFavourite.filter((fav) => fav.id !== item.id);
        await AsyncStorage.setItem("favorites", JSON.stringify(updatedList));
        setListFavourite(updatedList);
        setIsEnabled(false);
        console.log("Check list remove: ", listFavourite);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItemFavourite = async (item) => {
    try {
      let favourites = [...listFavourite];
      const existingFavorites = await AsyncStorage.getItem("favorites");

      if (existingFavorites) {
        favourites = JSON.parse(existingFavorites);
      }

      const isItemExist = favourites.some((fav) => fav.id === item.id);

      if (isItemExist) {
        const updatedList = listFavourite.filter((fav) => fav.id !== item.id);
        await AsyncStorage.setItem("favorites", JSON.stringify(updatedList));
        setListFavourite(updatedList);
        console.log("Check list remove: ", listFavourite);

        if (item.id === product.id) {
          setIsEnabled(false); // Update the switch to be disabled (false)
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavouriteList();
    console.log("Check list favorite", listFavourite);
  }, []);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      addItemFavourite(product);
      // Alert.alert("Thích", "Đã thêm vào danh sách yêu thích");
    } else {
      addItemFavourite(product);
      // Alert.alert("!Thích", "Đã xóa khỏi danh sách yêu thích");
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#F03B39" }}
        thumbColor={isEnabled ? "#F03B39" : "#444654"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwitchAdd;
