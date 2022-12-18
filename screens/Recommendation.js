import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

let balloon = require("../assets/play.png");
let hamburger = require("../assets/food.png");
let coffee = require("../assets/cafe.png");

export default function Recommendation({ navigation }) {
  const [category, setCategory] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.headbox}></View>
      <View style={styles.title}>
        <Text style={styles.titlename}>나에게 딱 맞는 장소</Text>
      </View>
      <View style={styles.subtitle}>
        <Text style={styles.subtitlename}>원하는 장소의 유형을 골라봐!</Text>
      </View>
      <View style={styles.buttonbox}>
        <TouchableOpacity
          style={styles.typeBtn}
          onPress={() => {
            setCategory("카페");
            navigation.navigate(
              "CateList",
              { screen: "Cafe" },
              { category: category }
            );
          }}
        >
          <Image
            style={{
              width: 250,
              height: 250,
              borderRadius: 100,
            }}
            source={coffee}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonbox2}>
        <TouchableOpacity
          style={styles.typeBtn}
          onPress={() => {
            setCategory("음식점");
            navigation.navigate(
              "CateList",
              { screen: "Food" },
              { category: category }
            );
          }}
        >
          <Image
            style={{
              width: 250,
              height: 250,
              borderRadius: 100,
            }}
            source={hamburger}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonbox3}>
        <TouchableOpacity
          style={styles.typeBtn}
          onPress={() => {
            setCategory("놀거리");
            navigation.navigate(
              "CateList",
              { screen: "Play" },
              { category: category }
            );
          }}
        >
          <Image
            style={{
              width: 250,
              height: 370,
            }}
            source={balloon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  headbox: {
    flex: 10,
  },
  title: {
    flex: 8,
    backgroundColor: "#F7F7F7",
    paddingLeft: "6%",
    paddingRight: "6%",
    JustifyContent: "center",
  },
  subtitle: {
    flex: 7,
    backgroundColor: "#F7F7F7",
    justifyContent: "space-between",
    paddingLeft: "6%",
    paddingRight: "6%",
    marginTop: -20,
  },
  subtitlename: {
    fontSize: 14,
    fontWeight: "200",
    color: "#5C80FE",
  },
  buttonbox: {
    flex: 25,
    marginLeft: 10,
    marginTop: 0,
    marginRight: 120,
  },
  buttonbox2: {
    flex: 20,
    marginLeft: 150,
    marginTop: -90,
  },
  buttonbox3: {
    flex: 30,
    marginLeft: 30,
    marginTop: 0,
    marginRight: 120,
  },
  titlename: {
    fontSize: 30,
    fontWeight: "700",
  },
  buttonContainer: {
    backgroundColor: "#F7F7F7",
    borderRadius: 13,
    margin: 5,
    borderColor: "#FE681B",
    borderWidth: 1,
    alignItems: "center",
    width: SCREEN_WIDTH * 0.2,
    justifyContent: "center",
  },
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    alignConent: "center",
    margin: 5,
    alignItems: "center",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.2,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
