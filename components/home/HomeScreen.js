import React, { useState } from "react";
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

export default function HomeScreen({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const [hoveredId, setHoveredId] = useState(null);

  const handlePressIn = (id) => {
    setHoveredId(id);
  };

  const handlePressOut = () => {
    setHoveredId(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {HomeScreenData.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={[styles.productContainer, { width: windowWidth / 2 - 20 }]}
            onPress={() => navigation.navigate("DetailScreen")}
            onPressIn={() => handlePressIn(product.id)}
            onPressOut={handlePressOut}
            activeOpacity={0.7}
          >
            <Image source={product.image} style={styles.image} />
            <Text
              style={[
                styles.name,
                hoveredId === product.id && styles.hoveredName,
              ]}
            >
              {product.name}
            </Text>
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
    backgroundColor: "#ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  hoveredName: {
    color: "red",
  },
});
