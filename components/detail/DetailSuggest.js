import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomeScreenData from "../data/HomeScreenData";
const DetailSuggest = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const handlePress = (product) => {
    navigation.navigate("DetailScreen", { product });
  };
  const limit = 4;
  return (
    <View style={styles.container}>
      {HomeScreenData.slice(0, limit).map((product) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    backgroundColor: "#FCF8EE",
  },
  productContainer: {
    marginBottom: 20,
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
export default DetailSuggest;
