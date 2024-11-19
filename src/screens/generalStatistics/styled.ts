import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface IHeaderProps {
  typeHeader?: "success" | "danger";
  typeCard?: "simple" | "success" | "danger";
}

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCards = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_6};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -30px;
  padding: 24px;
  align-items: center;
`;

export const TitleContainer = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT.SIZE_24}px;
  margin-bottom: 24px;
`;

export const Card = styled.View<IHeaderProps>`
  background-color: ${(props) => {
    if (props.typeCard === "success") {
      return props.theme.COLORS.green_mid;
    }
    if (props.typeCard === "danger") {
      return props.theme.COLORS.red_mid;
    }
    return props.theme.COLORS.gray_5;
  }};

  width: ${(props) => {
    if (props.typeCard === "success" || props.typeCard === "danger") {
      return "160px";
    }
    return "100%";
  }};

  flex-direction: column;
  height: 100px;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const TitleCard = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT.SIZE_24}px;
`;

export const SubTitleCard = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT.SIZE_14}px;
  text-align: center;
`;
