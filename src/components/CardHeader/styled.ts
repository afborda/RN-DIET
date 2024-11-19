import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

interface CardProps {
  typeCard: "success" | "danger";
}

export const Container = styled.View``;

export const HeaderComponent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 33px;
`;

export const Card = styled(TouchableOpacity)<CardProps>`
  height: 102px;
  width: 100%;
  background-color: ${(props) =>
    props.typeCard === "success"
      ? props.theme.COLORS.green_light
      : props.theme.COLORS.red_light};
  margin-bottom: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
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

export const ArrowUpRightIcon = styled(ArrowUpRight)<CardProps>`
  position: absolute;
  right: 5px;
  top: 5px;
  color: ${(props) =>
    props.typeCard === "success"
      ? props.theme.COLORS.green_dark
      : props.theme.COLORS.red_dark};
`;
