import styled from "styled-components/native";

export const HeadBox = styled.View`
  flex: 10;
  background-color: #f7f7f7;
`;

export const TitleBox = styled.View`
  flex: 8;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7f7f7;
  padding-left: 6.5%;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

export const SubTitle = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 6%;
  padding-right: 6%;
`;

export const Main = styled.View`
  justify-content: center;
  align-items: center;
  flex: 75;
  background-color: #f7f7f7;
`;

export const PlaceDiv = styled.TouchableOpacity`
  height: 152px;
  width: 90%;
  border-radius: 13px;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
`;

// PlaceDiv

export const Poster = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-left: 17px;
  justify-content: flex-start;
  align-items: center;
`;

export const Column = styled.View`
  height: 100%;
  padding-top: 25px;
  padding-bottom: 17px;
  flex-direction: column;
  margin-left: 10px;
  justify-content: space-between;
`;

export const BasicInfo = styled.View``;

export const FirstRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 7px;
`;

export const PlaceName = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: 400;
`;

export const Category = styled.Text`
  color: #fe681b;
  font-size: 10px;
  font-weight: 400;
  margin-left: 3px;
  margin-bottom: 2.5px;
`;

export const Tag = styled.Text`
  color: #6c6c70;
  font-size: 12px;
  margin-bottom: 0.5px;
`;

export const Address = styled.Text`
  color: #6c6c70;
  font-size: 10px;
`;
