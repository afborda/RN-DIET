import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_4};
`;

export const ContainerTime = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Pipe = styled.View`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.COLORS.gray_4};
  margin: 0 8px;
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-size: ${({ theme }) => theme.FONT.SIZE_14}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_2};
  font-size: ${({ theme }) => theme.FONT.SIZE_16}px;
  flex: 1;
`;

export const Circle = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.green_dark};
`;
