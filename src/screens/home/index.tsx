import { Container, Title } from "./styled";
import Button from "@components/Button";
import CardList from "@components/CardList";
import Header from "@components/Header";

export default function Home() {
  return (
    <Container>
      <Header />
      <Title>Refeições</Title>
      <Button label="Nova refeição" type="primary" />

      <CardList />
    </Container>
  );
}
