import React, { useEffect, useRef, useState } from "react";
import { Text, View, ScrollView, Linking, Modal } from "react-native";
import styled from "styled-components/native";
import ModalPicker from "../components/ModalPicker";
import * as S from "../styles/StyledComponents";
import { Entypo } from "@expo/vector-icons";

const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 82;
  background-color: #f7f7f7;
`;

const TitleBox = styled.SafeAreaView`
  flex: 8;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f7f7;
`;

const TouchText = styled.TouchableOpacity`
  background-color: transparent;
  padding-left: 6.5%;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

const DISTRICT_LIST = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "강서구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
];

const District = () => {
  const [chooseData, setChooseData] = useState("강남구");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = () => {
    setIsModalVisible(!isModalVisible);
  };

  const setData = (dist) => {
    setChooseData(dist);
  };

  const [resultJson, setResultJson] = useState([]);

  const getResult = async () => {
    try {
      const response = await fetch(
        `http://52.79.68.113:8080/District/${DISTRICT_LIST.indexOf(chooseData)}`
      );
      const json = await response.json();
      setResultJson(json);
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getResult();
  }, [chooseData]);

  return (
    <View style={{ flex: 1 }}>
      <S.HeadBox></S.HeadBox>
      <TitleBox>
        <TouchText onPress={() => changeModalVisibility(true)}>
          <Title>{chooseData}</Title>
          <Entypo
            name="chevron-down"
            size={24}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </TouchText>
        <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          ></ModalPicker>
        </Modal>
      </TitleBox>
      <Main>
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
      </Main>
    </View>
  );
};
export default District;
