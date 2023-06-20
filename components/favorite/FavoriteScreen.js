import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  NestableDraggableFlatList,
  NestableScrollContainer,
} from "react-native-draggable-flatlist";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Favourite({ navigation }) {
  const [listFavourite, setListFavourite] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const isCheckboxChecked = selectedItems.length > 0;
  const isFocused = useIsFocused();

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
    <ScrollView nestedScrollEnabled={true}>
      <NestableScrollContainer>
        <NestableDraggableFlatList
          data={listFavourite}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <ImageBackground
                source={{ uri: item.image.uri }}
                style={styles.imageBackground}
              ></ImageBackground>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </NestableScrollContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textNot: {
    fontSize: 30,
  },
  imageBackground: {
    width: 100,
    height: 100,
  },
});
