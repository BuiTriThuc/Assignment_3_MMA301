import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomeScreenData from "../data/HomeScreenData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [listFavourite, setListFavourite] = useState([]);
  const [data, setData] = useState([]);

  const handlePress = (product) => {
    navigation.navigate("DetailScreen", { product });
  };

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

  useEffect(() => {
    getFavouriteList();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const updatedData = () => {
        const updatedData = HomeScreenData.map((item) => ({
          ...item,
          favorite: listFavourite.some((fav) => fav.id === item.id),
        }));
        setData(updatedData);
      };

      updatedData();
    }, [listFavourite])
  );

  console.log("Check list", data);

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={[styles.productContainer, { width: windowWidth / 2 - 20 }]}
            onPress={() => handlePress(product)}
            activeOpacity={0.7}
          >
            <Image source={product.image} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FCF8EE",
    padding: 10,
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: "#ECEEF5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },

  image: {
    borderRadius: 5,
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
