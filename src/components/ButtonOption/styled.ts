import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

interface ButtonOptionProps {
  active?: boolean;
  type?: "success" | "danger";
}

export const ContainerButtonOption = styled(TouchableOpacity)`
  flex-direction: row;
  width: 48%;
  background-color: ${({ theme }) => theme.COLORS.gray_6};
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 0 5px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT.SIZE_14}px;
    color: ${theme.COLORS.gray_2};
  `}
`;

export const Circle = styled.View<ButtonOptionProps>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.type === "danger"
      ? props.theme.COLORS.red_dark
      : props.theme.COLORS.green_dark};

  margin-right: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT.SIZE_16}px;
  `}
  margin-bottom: 5px;
`;
