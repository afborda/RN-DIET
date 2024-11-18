import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
`;

export const ContainerScroll = styled.ScrollView`
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_1};
  font-size: ${({ theme }) => theme.FONT.SIZE_16}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-bottom: 8px;
`;
