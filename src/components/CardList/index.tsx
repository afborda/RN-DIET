import { View } from "react-native";
import { Container, Circle, Time, Title, Pipe, ContainerTime } from "./styled";

export default function CardList() {
  return (
    <>
      <Container>
        <ContainerTime>
          <Time>12:00</Time>
          <Pipe />
        </ContainerTime>

        <Title>X-tudo</Title>

        <Circle />
      </Container>
    </>
  );
}
