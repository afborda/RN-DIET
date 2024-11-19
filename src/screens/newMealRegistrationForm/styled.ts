import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_5};
`;

export const ContainerForm = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -30px;
  padding: 24px;
  align-items: center;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT.SIZE_16}px;
  `}
  margin-top: 15px;
  width: 100%;
`;
