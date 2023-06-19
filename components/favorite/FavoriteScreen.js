import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const menuItemsToDisplay = [
  {
    name: "Phi Điệp",
    image: {
      uri: "https://hoisvcvn.org.vn/Uploads/images/1(405).jpg",
    },
    id: "1",
    description: "thucbuisadsad",
  },
  {
    name: "Long Tu",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "2",
    description: "thucbuisadsad",
  },
  {
    name: "Cẩm Cù",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "3",
    description: "thucbuisadsad",
  },
  {
    name: "Hạc Vỹ",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "4",
    description: "thucbuisadsad",
  },
  {
    name: "Hạc Vỹ",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "5",
    description: "",
  },
  {
    name: "Hạc Vỹ",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "6",
    description: "",
  },
  {
    name: "Hạc Vỹ",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "7",
    description: "",
  },
  {
    name: "Hạc Vỹ",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxo-7jOhTycvc7Wc6NRjyP_USZRgyyLVLsVQ&usqp=CAU",
    },
    id: "8",
    description: "",
  },
];

const Item = ({ name, image, description, onDelete, navigation }) => {
  const handleDelete = () => {
    Alert.alert("Xóa", "Có chắc là muốn xóa khỏi danh sách yêu thích?", [
      {
        text: "Không",
        style: "cancel",
      },
      {
        text: "Xóa",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  return (
    <View>
      <TouchableOpacity
        style={menuStyles.innerContainer}
        onPress={() => navigation.navigate("DetailScreen")}
      >
        <Image style={menuStyles.itemImage} source={image} />
        <View style={menuStyles.itemContent}>
          <View style={menuStyles.itemTextContainer}>
            <Text style={menuStyles.itemText}>{name}</Text>
            <Text style={menuStyles.itemDescription}>{description}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleDelete}
          style={menuStyles.deleteButton}
        >
          <Ionicons name="trash-outline" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
const MenuItems = ({ navigation }) => {
  const [menuItems, setMenuItems] = React.useState(menuItemsToDisplay);

  const renderItem = ({ item }) => (
    <Item
      name={item.name}
      image={item.image}
      description={item.description}
      navigation={navigation}
      onDelete={() => handleDeleteItem(item.id)}
    />
  );

  const handleDeleteItem = (itemId) => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <View style={menuStyles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF8EE",
  },
  innerContainer: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    borderWidth: 0.5,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "#343640",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 100,
  },
  itemDescription: {
    color: "#343640",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 100,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
});

export default MenuItems;
