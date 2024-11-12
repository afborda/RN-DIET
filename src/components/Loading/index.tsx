import { View, Text } from "react-native";
import { Container, LoadingIndicator } from "./styled";

export default function Loading() {
  return (
    <Container>
      <LoadingIndicator />
    </Container>
  );
}
