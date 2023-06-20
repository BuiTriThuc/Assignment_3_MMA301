import React, { useState } from "react";
import { View, Switch, StyleSheet, Alert } from "react-native";

const SwitchAdd = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      Alert.alert("Thích", "Đã thêm vào danh sách yêu thích");
    } else {
      Alert.alert("!Thích", "Đã xóa khỏi danh sách yêu thích");
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
