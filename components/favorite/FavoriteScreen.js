import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Favourite({ navigation }) {
  const [listFavourite, setListFavourite] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const isCheckboxChecked = selectedItems.length > 0;
  const isFocused = useIsFocused();

  const handlePress = (product) => {
    navigation.navigate("DetailScreen", { product });
  };

  const getFavouriteList = async () => {
    try {
      const favorites = await AsyncStorage.getItem("favorites");
      if (favorites) {
        const parsedFavorites = JSON.parse(favorites);
        setListFavourite(parsedFavorites);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavouriteList();
  }, [isFocused]);

  if (listFavourite.length === 0) {
    return (
      <View>
        <Text style={styles.textNot}>Your favorites list is empty</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={listFavourite}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.listItem}>
            <ImageBackground
              source={{ uri: item.image.uri }}
              style={styles.imageBackground}
            ></ImageBackground>
            <View style={styles.namedesc}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    margin: 8,
    backgroundColor: "#FCF8EE",
    borderWidth: 0.3,
  },
  namedesc: {
    marginTop: -5,
  },
  desc: {
    marginRight: 106,
    textAlign: "justify",
    marginLeft: 12,
  },
  textNot: {
    fontSize: 30,
  },
  name: {
    marginTop: 3,
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 12,
  },
  imageBackground: {
    width: 100,
    height: 100,
  },
});
