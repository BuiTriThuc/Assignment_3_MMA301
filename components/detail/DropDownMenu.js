import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { Ionicons } from "@expo/vector-icons";

const DropDownMenu = () => {
  return (
    <MenuProvider style={styles.container}>
      <View>
        <Menu>
          <MenuTrigger customStyles={triggerStyles}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </MenuTrigger>

          <MenuOptions>
            <MenuOption
              onSelect={() => alert(`Đã lưu vào danh sách yêu thích`)}
              text="Save"
            />
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FCF8EE",
  },
});

const triggerStyles = {
  triggerText: {
    color: "black",
  },
  triggerWrapper: {
    padding: 5,
  },
};

export default DropDownMenu;
