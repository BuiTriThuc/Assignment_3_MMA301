import React from "react";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const DATA = [
  {
    coverImageUri:
      "https://hellohoa.com/wp-content/uploads/2020/08/lan-phi-diep-dep.jpg",
    cornerLabelColor: "#FFD300",
    cornerLabelText: "GOTY",
  },
  {
    coverImageUri:
      "https://vuonlan.net/wp-content/uploads/2019/08/phi-diep-vang-3.jpg",
    cornerLabelColor: "#0080ff",
    cornerLabelText: "NEW",
  },
  {
    coverImageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMpDviPbtRWodBowAV1bp_C1nChfQpYmYQKp4g3vaQw-GCfgRQupfMZYY3t4QkZNvWnc&usqp=CAU",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-75%",
  },
  {
    coverImageUri:
      "https://vattulan.net/wp-content/uploads/2020/08/lan-phi-diep-tim-4.jpg",
    cornerLabelColor: "#2ECC40",
    cornerLabelText: "-20%",
  },
];

const CarouselData = () => {
  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        ></View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});
export default CarouselData;
