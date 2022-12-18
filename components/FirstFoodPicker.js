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
  "양 혜자",
  "미미(美味)",
  "기념일",
  "갓성비",
  "특별 메뉴",
  "넓은 매장",
  "단체모임",
  "혼밥",
  "fresh",
  "인생샷",
  "인테리어",
  "수다",
  "알차다",
  "뷰 맛집",
  "A+++ 고기",
  "고마카세",
  "아늑한",
  "웰빙",
  "화장실",
  "주차",
  "룸",
  "깔끔 포장",
  "스피디",
  "반찬이 메인",
  "장기 투숙",
];

const FirstFoodPicker = (props) => {
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

export default FirstFoodPicker;
