import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type FeedbackSuccesProps = {
  type: "success" | "danger";
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text<FeedbackSuccesProps>`
  color: ${(props) =>
    props.type === "danger"
      ? props.theme.COLORS.red_dark
      : props.theme.COLORS.green_dark};
  font-size: ${({ theme }) => theme.FONT.SIZE_32}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-size: ${({ theme }) => theme.FONT.SIZE_16}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 24px;
  text-align: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 260px;
  margin-bottom: 24px;
`;
