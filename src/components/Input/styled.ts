import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface InputProps {
  typeInput?: "simple" | "description";
}

export const Container = styled(TextInput)<InputProps>`
  flex: 1;
  min-height: ${(porps) =>
    porps.typeInput === "description" ? "120px" : "48px"};
  max-height: ${(porps) =>
    porps.typeInput === "description" ? "120px" : "48px"};
  border-radius: 6px;
  padding: ${(porps) => (porps.typeInput === "description" ? "5px" : "16px")};

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.gray_5};
    color: ${theme.COLORS.gray_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT.SIZE_16}px;
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.gray_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT.SIZE_16}px;
  `}
  margin-bottom: 5px;
`;
