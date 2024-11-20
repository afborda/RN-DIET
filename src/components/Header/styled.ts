import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface IHeaderProps {
  typeHeader?: "success" | "danger";
  typeCard?: "simple" | "success" | "danger";
}

export const Container = styled.View``;

export const HeaderContainer = styled(SafeAreaView)<IHeaderProps>`
  width: 100%;
  height: 200px;
  background-color: ${(props) => {
    if (props.typeHeader === "success") {
      return props.theme.COLORS.green_light;
    }
    if (props.typeHeader === "danger") {
      return props.theme.COLORS.red_light;
    }
    return props.theme.COLORS.gray_5;
  }};

  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Percentage = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-size: ${({ theme }) => theme.FONT.SIZE_32}px;
`;

export const SubDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
  font-size: ${({ theme }) => theme.FONT.SIZE_14}px;
`;

export const ContainerIcons = styled(TouchableOpacity)`
  height: 40px;
  width: 100px;
  position: absolute;
  left: 5px;
  top: 60px;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeftHeader = styled(ArrowLeft)<IHeaderProps>`
  color: ${(props) => {
    if (props.typeHeader === "success") {
      return props.theme.COLORS.green_dark;
    }
    if (props.typeHeader === "danger") {
      return props.theme.COLORS.red_dark;
    }
    return props.theme.COLORS.gray_1;
  }};
`;
