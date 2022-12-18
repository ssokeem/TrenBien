import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components";
import * as S from "../styles/StyledComponents";

const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f7f7f7;
`;

const SubMain = styled.View`
  justify-content: center;
  align-items: center;
  flex: 75;
  background-color: #f7f7f7;
`;

const NativeStack = createNativeStackNavigator();

function Stack({ navigation, route }) {
  const resultJson = route.params.resultJson;
  return (
    <NativeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <NativeStack.Screen
        name="Hot Place Near You"
        options={{ presentation: "modal" }}
        component={NearPlace}
        resultJson={resultJson}
      />
    </NativeStack.Navigator>
  );
}

function NearPlace({ navigation: { navigate } }) {
  const DATA = [
    {
      name: "이로운밥상",
      category: "음식점",
      detailedAddress: "서울 서대문구 연대동문길 27-6",
      placeUrl: "https://m.place.naver.com/restaurant/1464825402/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220323_284%2F1648035446990nSeJn_JPEG%2FKakaoTalk_20220323_135611037.jpg",
      tag1: "디저트 존맛",
      tag2: "프라이빗",
      latitude: 37.564,
      longitude: 126.944,
      distance: 443,
    },
    {
      name: "완차이",
      category: "음식점",
      detailedAddress: "서울 서대문구 명물길 50-7",
      placeUrl: "https://m.place.naver.com/restaurant/1239464884/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210407_171%2F1617762510299Xodiy_JPEG%2FwwGuS8gGba3vMwQQFeJf46nH.jpg",
      tag1: "단체모임",
      tag2: "fresh",
      latitude: 37.5587,
      longitude: 126.939,
      distance: 599,
    },
    {
      name: "리춘시장 신촌점",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로9길 10-4 1층",
      placeUrl: "https://m.place.naver.com/restaurant/1123611672/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200229_52%2F1582965173814iF9hM_JPEG%2FVhRAucwxT_degly7NsY336vA.jpg",
      tag1: "합리적 가격",
      tag2: "프라이빗",
      latitude: 37.5586,
      longitude: 126.936,
      distance: 665,
    },
    {
      name: "대포찜닭",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로 27-1 3층",
      placeUrl: "https://m.place.naver.com/restaurant/33093065/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20161004_110%2F1475549024867lQPMX_JPEG%2F176954517361641_1.jpeg",
      tag1: "미미(美味)",
      tag2: "프라이빗",
      latitude: 37.5581,
      longitude: 126.937,
      distance: 689,
    },
    {
      name: "착한곱창",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로9길 19",
      placeUrl: "https://m.place.naver.com/restaurant/1436458587/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20211219_175%2F1639894429642yDSTd_JPEG%2F1D8A395D-98F3-4372-AEBB-2AC92F0A765B.jpeg",
      tag1: "청결왕",
      tag2: "친절",
      latitude: 37.5583,
      longitude: 126.936,
      distance: 696,
    },
    {
      name: "아콘스톨",
      category: "음식점",
      detailedAddress: "서울 서대문구 신촌역로 17 1층 110호",
      placeUrl: "https://m.place.naver.com/restaurant/1946223191/home",
      imageUrl: null,
      tag1: "갓성비",
      tag2: "친절",
      latitude: 37.5583,
      longitude: 126.942,
      distance: 697,
    },
    {
      name: "벨라프라하",
      category: "카페",
      detailedAddress: "서울 서대문구 이화여대길 77 1층",
      placeUrl: "https://m.place.naver.com/restaurant/13152789/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220806_51%2F1659789437484ABJAJ_JPEG%2FQhPHNAc3YW4INmBD3Wu5ccit.jpg",
      tag1: "음료",
      tag2: "특별 메뉴",
      latitude: 37.559,
      longitude: 126.944,
      distance: 719,
    },
    {
      name: "카라멘야",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로7안길 34-1 1층",
      placeUrl: "https://m.place.naver.com/restaurant/1767701213/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210629_13%2F1624955183384FGYi8_JPEG%2FyXkfWJHf_UfUg2W9i596470T.jpg",
      tag1: "합리적 가격",
      tag2: "프라이빗",
      latitude: 37.5582,
      longitude: 126.935,
      distance: 743,
    },
    {
      name: "돈천동식당",
      category: "음식점",
      detailedAddress: "서울 서대문구 이화여대길 52-35 2층",
      placeUrl: "https://m.place.naver.com/restaurant/32315473/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191022_285%2F1571720301361NLSkf_JPEG%2Fa5K-xFy9sUZiXpMb_5edzAUE.jpg",
      tag1: "미미(美味)",
      tag2: "프라이빗",
      latitude: 37.5594,
      longitude: 126.945,
      distance: 744,
    },
    {
      name: "여래여거",
      category: "음식점",
      detailedAddress: "서울 서대문구 이화여대길 56-3",
      placeUrl: "https://m.place.naver.com/restaurant/1413429954/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220704_17%2F1656927985767fx9bc_JPEG%2FC86A7EDF-4805-4BAA-A81E-4F2F023092B5.jpeg",
      tag1: "단체모임",
      tag2: "미미(美味)",
      latitude: 37.5593,
      longitude: 126.945,
      distance: 752,
    },
    {
      name: "타코로코",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로7안길 37 1층",
      placeUrl: "https://m.place.naver.com/restaurant/36395315/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200401_278%2F1585724897774YlR8Q_JPEG%2FqpWS72oNJg_Xn4o-GcjBJryN.jpg",
      tag1: "넓은 매장",
      tag2: "프라이빗",
      latitude: 37.5581,
      longitude: 126.935,
      distance: 753,
    },
    {
      name: "연희보리밥",
      category: "음식점",
      detailedAddress: "서울 서대문구 연희맛로 33 1층",
      placeUrl: "https://m.place.naver.com/restaurant/1147126296/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220401_92%2F1648792349179YUvrd_JPEG%2F%25BE%25C6%25B7%25D5%25BB%25E7%25C5%25C2%25B5%25C8%25C0%25E5%25C3%25BB%25B1%25B9%25C0%25E52%25C0%25CE%25BA%25BA%25C0%25BD_%25BC%25BC%25C6%25AE_%25C7%25D7%25B0%25F8.jpg",
      tag1: "fresh",
      tag2: "프라이빗",
      latitude: 37.568,
      longitude: 126.931,
      distance: 827,
    },
    {
      name: "탈리",
      category: "카페",
      detailedAddress: "서울 서대문구 연세로5나길 30-6 1,2층",
      placeUrl: "https://m.place.naver.com/restaurant/1966558505/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220425_143%2F1650874409253YMAFw_JPEG%2FKakaoTalk_20220424_200410889.jpg",
      tag1: "인생샷",
      tag2: "인테리어",
      latitude: 37.5572,
      longitude: 126.935,
      distance: 843,
    },
    {
      name: "시카고피자 연희점",
      category: "음식점",
      detailedAddress: "서울 서대문구 연희로 154",
      placeUrl: "https://m.place.naver.com/restaurant/36943103/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20160108_98%2F1452207580693Q0KEz_JPEG%2F176058478959596_0.jpeg",
      tag1: "미미(美味)",
      tag2: "프라이빗",
      latitude: 37.5709,
      longitude: 126.934,
      distance: 875,
    },
    {
      name: "왕왕",
      category: "음식점",
      detailedAddress: "서울 서대문구 연희맛로 27 2층",
      placeUrl: "https://m.place.naver.com/restaurant/123275931/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20170313_102%2F1489382469847ekdr1_JPEG%2F186260583348038_0.jpeg",
      tag1: "갓성비",
      tag2: "친절",
      latitude: 37.5676,
      longitude: 126.93,
      distance: 882,
    },
    {
      name: "로컬식당",
      category: "음식점",
      detailedAddress: "서울 서대문구 이화여대1길 33 1층",
      placeUrl: "https://m.place.naver.com/restaurant/1966414211/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220923_140%2F1663912384295SjJWp_JPEG%2F2%25C0%25CE_%25BC%25BC%25C6%25AE_2_%25C7%25D7%25B0%25F8.jpg",
      tag1: "갓성비",
      tag2: "특별 메뉴",
      latitude: 37.5571,
      longitude: 126.944,
      distance: 895,
    },
    {
      name: "대성이네",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로5나길 33",
      placeUrl: "https://m.place.naver.com/restaurant/31964075/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20221103_114%2F1667465287752lxluD_JPEG%2F1667458226553-7.jpg",
      tag1: "청결왕",
      tag2: "친절",
      latitude: 37.557,
      longitude: 126.934,
      distance: 903,
    },
    {
      name: "목란",
      category: "음식점",
      detailedAddress: "서울 서대문구 연희로15길 21",
      placeUrl: "https://m.place.naver.com/restaurant/11880458/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20150831_62%2F1440992706193nR2Iy_JPEG%2F11880458_2.jpg",
      tag1: "갓성비",
      tag2: "프라이빗",
      latitude: 37.5683,
      longitude: 126.93,
      distance: 919,
    },
    {
      name: "엄마식탁",
      category: "음식점",
      detailedAddress: "서울 서대문구 연희맛로 17-21",
      placeUrl: "https://m.place.naver.com/restaurant/1458553422/home",
      imageUrl: null,
      tag1: "청결왕",
      tag2: "친절",
      latitude: 37.5666,
      longitude: 126.929,
      distance: 923,
    },
    {
      name: "전주파전",
      category: "음식점",
      detailedAddress: "서울 서대문구 연세로5다길 26 1층",
      placeUrl: "https://m.place.naver.com/restaurant/1534966118/home",
      imageUrl:
        "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220406_41%2F1649249052308JXDhg_JPEG%2F20211126_174757_remastered.jpg",
      tag1: "fresh",
      tag2: "친절",
      latitude: 37.5567,
      longitude: 126.934,
      distance: 932,
    },
  ];

  return (
    <SubMain>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ flex: 1, flexDirection: "column", width: "100%" }}
      >
        {DATA.map((array, index) => {
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
                      <S.PlaceName>{array.name}</S.PlaceName>
                      <S.Category>{array.category}</S.Category>
                    </S.FirstRow>
                    <S.Tag>
                      #{array.tag1} #{array.tag2}
                    </S.Tag>
                  </S.BasicInfo>
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-end" }}
                  >
                    <S.Address>내 위치 기준</S.Address>
                    <Text
                      style={{
                        color: "#EA5050",
                        fontSize: 14,
                        fontWeight: "400",
                        marginBottom: -2,
                      }}
                    >
                      {" "}
                      {array.distance}m
                    </Text>
                  </View>
                </S.Column>
              </S.Wrapper>
            </S.PlaceDiv>
          );
        })}
      </ScrollView>
    </SubMain>
  );
}

export default Stack;
