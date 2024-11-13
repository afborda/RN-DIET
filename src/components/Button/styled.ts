import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLORS.gray_2};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT.SIZE_14}px;
    color: ${theme.COLORS.WHITE};
    margin-left: 8px;
  `}
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
