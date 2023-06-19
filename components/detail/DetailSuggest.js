import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import detailSuggest from "../data/DetailSuggestData";

const DetailSuggest = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const itemWidth = windowWidth / 2 - 20; // Width calculation for each item

  return (
    <View style={styles.container}>
      {detailSuggest.map((detailSuggest) => (
        <View
          key={detailSuggest.id}
          style={[styles.productSuggestContainer, { width: itemWidth }]}
        >
          <Image source={detailSuggest.image} style={styles.image} />
          <Text
            onPress={() => navigation.navigate("DetailScreen")}
            style={styles.name}
          >
            {detailSuggest.name}
          </Text>
        </View>
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
  productSuggestContainer: {
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: -10,
  },
  image: {
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
export default DetailSuggest;
