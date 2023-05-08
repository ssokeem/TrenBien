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
  "넓은 매장",
  "깨끗",
  "선물",
  "인생샷",
  "인테리어",
  "초보자 환영",
  "수업시간 혜자",
  "수다",
  "독서",
  "뷰 맛집",
  "디테일한 설명",
  "테마",
  "가족끼리",
  "주차",
  "컨셉",
  "맞춤형",
  "합리적 가격",
  "다양한 체험",
  "소품",
  "MD 맛집",
  "조식",
  "깔끔한 시설",
  "넓은 공간",
  "체험",
  "힐링",
  "특색",
  "프라이빗",
];

const ThirdPlayPicker = (props) => {
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

export default ThirdPlayPicker;
