import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components";
import FirstCafePicker from "../components/FirstCafePicker";
import SecondCafePicker from "../components/SecondCafePicker";
import ThirdCafePicker from "../components/ThirdCafePicker";
import FirstFoodPicker from "../components/FirstFoodPicker";
import SecondFoodPicker from "../components/SecondFoodPicker";
import ThirdFoodPicker from "../components/ThirdFoodPicker";
import FirstPlayPicker from "../components/FirstPlayPicker";
import SecondPlayPicker from "../components/SecondPlayPicker";
import ThirdPlayPicker from "../components/ThirdPlayPicker";
import * as S from "../styles/StyledComponents";
import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const HeadBox = styled.View`
  flex: 8;
  background-color: #f7f7f7;
`;

const SubTitle = styled.View`
  flex: 7;
  justify-content: center;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
`;

const SubTitleName = styled.Text`
  font-size: 14px;
  font-weight: 200;
  color: #5c80fe;
`;

const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 55;
  background-color: #f7f7f7;
`;

const SecondMain = styled.View`
  justify-content: center;
  align-items: center;
  flex: 82;
  background-color: #f7f7f7;
`;

const ResultButton = styled.View`
  /* justify-content: center; */
  align-items: center;
  flex: 20;
  background-color: #f7f7f7;
`;

const BigText = styled.Text`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const TouchText = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #fe681b;
  margin-bottom: 30px;
`;

function Cafe({ navigation: { navigate } }) {
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [dataset, setDataset] = useState({});
  const [complete, setComplete] = useState(0);
  const [resultJson, setResultJson] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTwoModalVisible, setIsTwoModalVisible] = useState(false);
  const [isThreeModalVisible, setIsThreeModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const changeTwoModalVisibility = () => {
    setIsTwoModalVisible(!isTwoModalVisible);
  };

  const changeThreeModalVisibility = () => {
    setIsThreeModalVisible(!isThreeModalVisible);
  };

  const firstTag = (tag) => {
    setTag1(tag);
  };

  const secondTag = (tag) => {
    setTag2(tag);
  };

  const thirdTag = (tag) => {
    setTag3(tag);
  };

  useEffect(() => {
    setDataset({ category: "카페", tag1: tag1, tag2: tag2, tag3: tag3 });
  }, [isModalVisible, isTwoModalVisible, isThreeModalVisible]);

  const getResult = async () => {
    try {
      const response = await fetch(`http://52.79.68.113:8080/Recommand/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataset),
      });
      const json = await response.json();
      setResultJson(json);
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getResult();
  }, [dataset]);

  return (
    <View style={{ flex: 3 }}>
      {complete === 0 ? (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '카페'</S.Title>
          </S.TitleBox>
          <Main>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>1순위</BigText>
              <TouchText onPress={() => changeModalVisibility(true)}>
                <Title>{tag1.length === 0 ? "태그 선택" : tag1}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isModalVisible}
              >
                <FirstCafePicker
                  changeModalVisibility={changeModalVisibility}
                  setData={firstTag}
                ></FirstCafePicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>2순위</BigText>
              <TouchText onPress={() => changeTwoModalVisibility(true)}>
                <Title>{tag2.length === 0 ? "태그 선택" : tag2}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isTwoModalVisible}
              >
                <SecondCafePicker
                  changeModalVisibility={changeTwoModalVisibility}
                  setData={secondTag}
                ></SecondCafePicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>3순위</BigText>
              <TouchText onPress={() => changeThreeModalVisibility(true)}>
                <Title>{tag3.length === 0 ? "태그 선택" : tag3}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isThreeModalVisible}
              >
                <ThirdCafePicker
                  changeModalVisibility={changeThreeModalVisibility}
                  setData={thirdTag}
                ></ThirdCafePicker>
              </Modal>
            </View>
          </Main>
          <ResultButton>
            <TouchableOpacity
              onPress={() => {
                if (tag1 == "" || tag2 == "" || tag3 == "") {
                  Alert.alert("태그를 선택해 주세요.");
                } else {
                  setComplete(1);
                }
              }}
            >
              <AntDesign name="rightcircle" size={50} color="black" />
            </TouchableOpacity>
          </ResultButton>
        </View>
      ) : (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '카페'</S.Title>
          </S.TitleBox>
          <SecondMain>
            <ScrollView
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ flex: 1, flexDirection: "column", width: "100%" }}
            >
              {resultJson.map((array, index) => {
                return (
                  <S.PlaceDiv
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => {
                      Linking.openURL(array.placeUrl);
                    }}
                  >
                    <S.Wrapper>
                      {array.imageUrl === null ? (
                        <S.Poster
                          source={{
                            uri: "https://velog.velcdn.com/images/jhn9803/post/a04066ce-652e-4d72-8993-8c1151cc05b2/image.jpg",
                          }}
                        ></S.Poster>
                      ) : (
                        <S.Poster source={{ uri: array.imageUrl }}></S.Poster>
                      )}
                      <S.Column>
                        <S.BasicInfo>
                          <S.FirstRow>
                            <S.PlaceName>
                              {array.name.length > 12
                                ? array.name.substring(0, 10) + "..."
                                : array.name}
                            </S.PlaceName>
                            <S.Category>{array.category}</S.Category>
                          </S.FirstRow>
                          <S.Tag>
                            #{array.tag1} #{array.tag2}
                          </S.Tag>
                        </S.BasicInfo>
                        <S.Address>
                          {array.detailedAddress.length > 24
                            ? array.detailedAddress.substring(0, 24) + "..."
                            : array.detailedAddress}
                        </S.Address>
                      </S.Column>
                    </S.Wrapper>
                  </S.PlaceDiv>
                );
              })}
            </ScrollView>
          </SecondMain>
        </View>
      )}
    </View>
  );
}

function Food({ navigation: { navigate } }) {
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [dataset, setDataset] = useState({});
  const [complete, setComplete] = useState(0);
  const [resultJson, setResultJson] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTwoModalVisible, setIsTwoModalVisible] = useState(false);
  const [isThreeModalVisible, setIsThreeModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const changeTwoModalVisibility = () => {
    setIsTwoModalVisible(!isTwoModalVisible);
  };

  const changeThreeModalVisibility = () => {
    setIsThreeModalVisible(!isThreeModalVisible);
  };

  const firstTag = (tag) => {
    setTag1(tag);
  };

  const secondTag = (tag) => {
    setTag2(tag);
  };

  const thirdTag = (tag) => {
    setTag3(tag);
  };

  useEffect(() => {
    setDataset({ category: "음식점", tag1: tag1, tag2: tag2, tag3: tag3 });
  }, [isModalVisible, isTwoModalVisible, isThreeModalVisible]);

  const getResult = async () => {
    try {
      const response = await fetch(`http://52.79.68.113:8080/Recommand/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataset),
      });
      const json = await response.json();
      setResultJson(json);
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getResult();
  }, [dataset]);

  return (
    <View style={{ flex: 3 }}>
      {complete === 0 ? (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '음식점'</S.Title>
          </S.TitleBox>
          <Main>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>1순위</BigText>
              <TouchText onPress={() => changeModalVisibility(true)}>
                <Title>{tag1.length === 0 ? "태그 선택" : tag1}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isModalVisible}
              >
                <FirstFoodPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={firstTag}
                ></FirstFoodPicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>2순위</BigText>
              <TouchText onPress={() => changeTwoModalVisibility(true)}>
                <Title>{tag2.length === 0 ? "태그 선택" : tag2}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isTwoModalVisible}
              >
                <SecondFoodPicker
                  changeModalVisibility={changeTwoModalVisibility}
                  setData={secondTag}
                ></SecondFoodPicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>3순위</BigText>
              <TouchText onPress={() => changeThreeModalVisibility(true)}>
                <Title>{tag3.length === 0 ? "태그 선택" : tag3}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isThreeModalVisible}
              >
                <ThirdFoodPicker
                  changeModalVisibility={changeThreeModalVisibility}
                  setData={thirdTag}
                ></ThirdFoodPicker>
              </Modal>
            </View>
          </Main>
          <ResultButton>
            <TouchableOpacity
              onPress={() => {
                if (tag1 == "" || tag2 == "" || tag3 == "") {
                  Alert.alert("태그를 선택해 주세요.");
                } else {
                  setComplete(1);
                }
              }}
            >
              <AntDesign name="rightcircle" size={50} color="black" />
            </TouchableOpacity>
          </ResultButton>
        </View>
      ) : (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '음식점'</S.Title>
          </S.TitleBox>
          <SecondMain>
            <ScrollView
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ flex: 1, flexDirection: "column", width: "100%" }}
            >
              {resultJson.map((array, index) => {
                return (
                  <S.PlaceDiv
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => {
                      Linking.openURL(array.placeUrl);
                    }}
                  >
                    <S.Wrapper>
                      {array.imageUrl === null ? (
                        <S.Poster
                          source={{
                            uri: "https://velog.velcdn.com/images/jhn9803/post/a04066ce-652e-4d72-8993-8c1151cc05b2/image.jpg",
                          }}
                        ></S.Poster>
                      ) : (
                        <S.Poster source={{ uri: array.imageUrl }}></S.Poster>
                      )}
                      <S.Column>
                        <S.BasicInfo>
                          <S.FirstRow>
                            <S.PlaceName>
                              {array.name.length > 12
                                ? array.name.substring(0, 10) + "..."
                                : array.name}
                            </S.PlaceName>
                            <S.Category>{array.category}</S.Category>
                          </S.FirstRow>
                          <S.Tag>
                            #{array.tag1} #{array.tag2}
                          </S.Tag>
                        </S.BasicInfo>
                        <S.Address>
                          {array.detailedAddress.length > 24
                            ? array.detailedAddress.substring(0, 24) + "..."
                            : array.detailedAddress}
                        </S.Address>
                      </S.Column>
                    </S.Wrapper>
                  </S.PlaceDiv>
                );
              })}
            </ScrollView>
          </SecondMain>
        </View>
      )}
    </View>
  );
}

function Play({ navigation: { navigate } }) {
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");
  const [dataset, setDataset] = useState({});
  const [complete, setComplete] = useState(0);
  const [resultJson, setResultJson] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTwoModalVisible, setIsTwoModalVisible] = useState(false);
  const [isThreeModalVisible, setIsThreeModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const changeTwoModalVisibility = () => {
    setIsTwoModalVisible(!isTwoModalVisible);
  };

  const changeThreeModalVisibility = () => {
    setIsThreeModalVisible(!isThreeModalVisible);
  };

  const firstTag = (tag) => {
    setTag1(tag);
  };

  const secondTag = (tag) => {
    setTag2(tag);
  };

  const thirdTag = (tag) => {
    setTag3(tag);
  };

  useEffect(() => {
    setDataset({ category: "놀거리", tag1: tag1, tag2: tag2, tag3: tag3 });
  }, [isModalVisible, isTwoModalVisible, isThreeModalVisible]);

  const getResult = async () => {
    try {
      const response = await fetch(`http://52.79.68.113:8080/Recommand/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataset),
      });
      const json = await response.json();
      setResultJson(json);
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getResult();
  }, [dataset]);

  return (
    <View style={{ flex: 3 }}>
      {complete === 0 ? (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '놀거리'</S.Title>
          </S.TitleBox>
          <Main>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>1순위</BigText>
              <TouchText onPress={() => changeModalVisibility(true)}>
                <Title>{tag1.length === 0 ? "태그 선택" : tag1}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isModalVisible}
              >
                <FirstPlayPicker
                  changeModalVisibility={changeModalVisibility}
                  setData={firstTag}
                ></FirstPlayPicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>2순위</BigText>
              <TouchText onPress={() => changeTwoModalVisibility(true)}>
                <Title>{tag2.length === 0 ? "태그 선택" : tag2}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isTwoModalVisible}
              >
                <SecondPlayPicker
                  changeModalVisibility={changeTwoModalVisibility}
                  setData={secondTag}
                ></SecondPlayPicker>
              </Modal>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <BigText>3순위</BigText>
              <TouchText onPress={() => changeThreeModalVisibility(true)}>
                <Title>{tag3.length === 0 ? "태그 선택" : tag3}</Title>
              </TouchText>
              <Modal
                transparent={true}
                animationType="slide"
                visible={isThreeModalVisible}
              >
                <ThirdPlayPicker
                  changeModalVisibility={changeThreeModalVisibility}
                  setData={thirdTag}
                ></ThirdPlayPicker>
              </Modal>
            </View>
          </Main>
          <ResultButton>
            <TouchableOpacity
              onPress={() => {
                if (tag1 == "" || tag2 == "" || tag3 == "") {
                  Alert.alert("태그를 선택해 주세요.");
                } else {
                  setComplete(1);
                }
              }}
            >
              <AntDesign name="rightcircle" size={50} color="black" />
            </TouchableOpacity>
          </ResultButton>
        </View>
      ) : (
        <View style={{ flex: 3 }}>
          <HeadBox></HeadBox>
          <S.TitleBox>
            <S.Title>나에게 딱 맞는 '놀거리'</S.Title>
          </S.TitleBox>
          <SecondMain>
            <ScrollView
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ flex: 1, flexDirection: "column", width: "100%" }}
            >
              {resultJson.map((array, index) => {
                return (
                  <S.PlaceDiv
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => {
                      Linking.openURL(array.placeUrl);
                    }}
                  >
                    <S.Wrapper>
                      {array.imageUrl === null ? (
                        <S.Poster
                          source={{
                            uri: "https://velog.velcdn.com/images/jhn9803/post/a04066ce-652e-4d72-8993-8c1151cc05b2/image.jpg",
                          }}
                        ></S.Poster>
                      ) : (
                        <S.Poster source={{ uri: array.imageUrl }}></S.Poster>
                      )}
                      <S.Column>
                        <S.BasicInfo>
                          <S.FirstRow>
                            <S.PlaceName>
                              {array.name.length > 12
                                ? array.name.substring(0, 10) + "..."
                                : array.name}
                            </S.PlaceName>
                            <S.Category>{array.category}</S.Category>
                          </S.FirstRow>
                          <S.Tag>
                            #{array.tag1} #{array.tag2}
                          </S.Tag>
                        </S.BasicInfo>
                        <S.Address>
                          {array.detailedAddress.length > 24
                            ? array.detailedAddress.substring(0, 24) + "..."
                            : array.detailedAddress}
                        </S.Address>
                      </S.Column>
                    </S.Wrapper>
                  </S.PlaceDiv>
                );
              })}
            </ScrollView>
          </SecondMain>
        </View>
      )}
    </View>
  );
}

function CateList() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        animation: "fade",
        headerBackVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="Food" component={Food} />
      <Stack.Screen name="Play" component={Play} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "100%",
    paddingTop: "20%",
    backgroundColor: "#FDF6EC",
    borderRadius: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CateList;
