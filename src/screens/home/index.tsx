import { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { Container, ContainerScroll, Title } from "./styled";

import Button from "@components/Button";
import CardList from "@components/CardList";
import CardHeader from "@components/CardHeader";

type Status = "success" | "danger";

export default function Home() {
  const [status, setStatus] = useState<Status>("success");

  const navigation = useNavigation();

  const handleNavigationNewMealRegistrationForm = () => {
    navigation.navigate("NewMeal");
  };

  const handleNavigatioStatistics = () => {
    navigation.navigate("Statistics", { type: status });
  };

  return (
    <Container>
      <ContainerScroll>
        <CardHeader onPress={handleNavigatioStatistics} type={status} />
        <Title>Refeições</Title>
        <Button
          label="Nova refeição"
          type="primary"
          onPress={handleNavigationNewMealRegistrationForm}
        />

        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </ContainerScroll>
    </Container>
  );
}
