import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_7};
  padding: 0 24px;
`;

export const Title = styled.Text`
  color: green;
  text-align: center;
  font-size: 24px;
`;
