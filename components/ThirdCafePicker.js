import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

const TAG_LIST = [
  "친절",
  "청결왕",
  "디저트 존맛",
  "미미(美味)",
  "갓성비",
  "특별 메뉴",
  "단체모임",
  "선물",
  "인생샷",
  "빵 존맛",
  "인테리어",
  "원두 맛집",
  "수다",
  "아늑한",
  "화장실",
  "집!중!",
  "주차",
  "음료",
  "편안한 좌석",
  "야외",
  "장기 투숙",
];

const ThirdCafePicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  const option = TAG_LIST.map((item, index) => {
    return (
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={() => onPressItem(item)}
      >
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={styles.modal}>
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "80%",
    height: "55%",
    // paddingTop: "20%",
    paddingTop: "5%",
    backgroundColor: "white",
    borderColor: "#5C80FE",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  option: {
    alignItems: "center",
  },
  text: {
    margin: 15,
    fontSize: 17,
    fontWeight: "500",
    color: "black",
  },
});

export default ThirdCafePicker;
