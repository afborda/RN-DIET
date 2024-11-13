import { Container, Title } from "./styled";
import Button from "@components/Button";

export default function Home() {
  return (
    <Container>
      <Title>Home</Title>
      <Button label="Nova refeição" type="primary" />
    </Container>
  );
}
