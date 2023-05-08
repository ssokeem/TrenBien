import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Linking } from "react-native";
import styled from "styled-components/native";
import * as S from "../styles/StyledComponents";

const CategoryBtn = styled.TouchableOpacity`
  background-color: white;
  border: #b4b3b3 solid 1px;
  border-radius: 13px;
  height: 50%;
  width: 22.7%;
  justify-content: center;
  align-items: center;
`;

const SelectBtn = styled.TouchableOpacity`
  background-color: white;
  border: #fe681b solid 1px;
  border-radius: 13px;
  height: 50%;
  width: 22.7%;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.Text`
  font-size: 12px;
`;

const SelectText = styled.Text`
  font-size: 12px;
  color: #fe681b;
`;

const Home = () => {
  const category = [
    { title: "all", name: "전체✨" },
    { title: "cafe", name: "️카페☕️" },
    { title: "food", name: "음식🍔" },
    { title: "play", name: "놀거리🎢" },
  ];

  const [isCategorySelect, setIsCategorySelect] = useState([
    true,
    false,
    false,
    false,
  ]);

  const [resultJson, setResultJson] = useState([]);

  const handleClick = (idx) => {
    const newArr = [false, false, false, false];
    newArr[idx] = !newArr[idx];
    setIsCategorySelect(newArr);
  };

  // rendering 시 AppLoading 추가

  const getResult = async () => {
    try {
      const response = await fetch(
        `http://52.79.68.113:8080/Home/${isCategorySelect.indexOf(true)}`
      );
      const json = await response.json();
      setResultJson(json);
      // console.log(resultJson);
    } catch (e) {
      // error
    }
  };

  useEffect(() => {
    getResult();
  }, [isCategorySelect]);

  return (
    <View style={{ flex: 1 }}>
      <S.HeadBox></S.HeadBox>
      <S.TitleBox>
        <S.Title>Most Popular</S.Title>
      </S.TitleBox>
      <S.SubTitle>
        {category.map((array, index) => {
          return isCategorySelect[index] ? (
            <SelectBtn
              activeOpacity={0.7}
              title={array.title}
              key={index}
              onPress={() => {
                handleClick(index);
              }}
            >
              <SelectText>{array.name}</SelectText>
            </SelectBtn>
          ) : (
            <CategoryBtn
              activeOpacity={0.7}
              title={array.title}
              key={index}
              onPress={() => {
                handleClick(index);
              }}
            >
              <BtnText>{array.name}</BtnText>
            </CategoryBtn>
          );
        })}
      </S.SubTitle>
      <S.Main>
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
      </S.Main>
    </View>
  );
};

export default Home;
