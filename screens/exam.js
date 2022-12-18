import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import * as S from "../styles/StyledComponents";
import {
  Select,
  SelectProvider,
} from "@mobile-reality/react-native-select-pro";

const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 82;
  background-color: #f7f7f7;
`;

const DATA = [
  {
    value: 0,
    label: "강남구",
  },
  {
    value: 1,
    label: "강동구",
  },
  {
    value: 2,
    label: "강북구",
  },
  {
    value: 3,
    label: "강서구",
  },
  {
    value: 4,
    label: "관악구",
  },
  {
    value: 5,
    label: "광진구",
  },
  {
    value: 6,
    label: "광진구",
  },
  {
    value: 7,
    label: "구로구",
  },
  {
    value: 8,
    label: "금천구",
  },
  {
    value: 9,
    label: "노원구",
  },
  {
    value: 10,
    label: "도봉구",
  },
  {
    value: 11,
    label: "동대문구",
  },
  {
    value: 12,
    label: "동작구",
  },
  {
    value: 13,
    label: "마포구",
  },
  {
    value: 14,
    label: "서대문구",
  },
  {
    value: 15,
    label: "서초구",
  },
  {
    value: 16,
    label: "성동구",
  },
  {
    value: 17,
    label: "성북구",
  },
  {
    value: 18,
    label: "송파구",
  },
  {
    value: 19,
    label: "양천구",
  },
  {
    value: 20,
    label: "영등포구",
  },
  {
    value: 21,
    label: "용산구",
  },
  {
    value: 22,
    label: "은평구",
  },
  {
    value: 23,
    label: "종로구",
  },
  {
    value: 24,
    label: "중구",
  },
  {
    value: 25,
    label: "중랑구",
  },
];

const District = () => {
  const place = {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
    place: "호이안로스터리 송리단길점",
    category: "카페",
    firstTag: "#특별한 메뉴가 있어요",
    secondTag: "#친절해요",
    address: "서울 송파구 백제고분로45길 3-18",
    url: "https://m.place.naver.com/restaurant/1403694368/home",
  };

  const ref = useRef();

  return (
    <SelectProvider>
      <View style={{ flex: 1 }}>
        <S.HeadBox></S.HeadBox>
        <S.TitleBox>
          {/* <S.Title>마포구</S.Title> */}
          <Select
            style={{ width: "100%" }}
            options={DATA}
            ref={ref}
            defaultOption={0}
          />
        </S.TitleBox>
        <Main>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            style={{ flex: 1, flexDirection: "column", width: "100%" }}
          >
            <S.PlaceDiv
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL(place.url);
              }}
            >
              <S.Wrapper>
                <S.Poster source={{ uri: place.src }}></S.Poster>
                <S.Column>
                  <S.BasicInfo>
                    <S.FirstRow>
                      <S.PlaceName>{place.place}</S.PlaceName>
                      <S.Category>{place.category}</S.Category>
                    </S.FirstRow>
                    <S.Tag>{place.firstTag}</S.Tag>
                    <S.Tag>{place.secondTag}</S.Tag>
                  </S.BasicInfo>
                  <S.Address>{place.address}</S.Address>
                </S.Column>
              </S.Wrapper>
            </S.PlaceDiv>
            <S.PlaceDiv activeOpacity={0.8}></S.PlaceDiv>
            <S.PlaceDiv activeOpacity={0.8}></S.PlaceDiv>
            <S.PlaceDiv activeOpacity={0.8}></S.PlaceDiv>
          </ScrollView>
        </Main>
      </View>
    </SelectProvider>
  );
};
export default District;

// const resultJson = [
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
//   {
//     category: "카페,디저트",
//     detailedAddress: "서울 송파구 백제고분로45길 3-18",
//     imageUrl:
//       "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200928_274%2F1601278120753p7l59_JPEG%2FlLbHmohg5rBKLgCv1mX5jhJZ.jpeg.jpg",
//     name: "호이안로스터리 송리단길점",
//     placeUrl: "https://m.place.naver.com/restaurant/1403694368/home",
//     tag: "가격이 합리적이에요, 가성비가 좋아요",
//   },
// ];

{
  /* <TouchableOpacity
          onPress={() => {
            navigate("Stack", { screen: "NearPlace", result: { resultJson } });
          }}
        >
          <Text>목록 보기</Text>
        </TouchableOpacity> */
}
