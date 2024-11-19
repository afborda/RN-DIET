import { Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftHeader,
  Card,
  Container,
  ContainerCards,
  ContainerIcons,
  HeaderContainer,
  Percentage,
  SubDescription,
  SubTitleCard,
  TitleCard,
  TitleContainer
} from "./styled";

import { useNavigation, useRoute } from "@react-navigation/native";

type props = {
  type?: "success" | "danger";
  typeCard?: "simple" | "success" | "danger";
};

export function GeneralStatistics({}: props) {
  const navigation = useNavigation();

  const route = useRoute();
  const { type } = route.params;

  return (
    <Container>
      <HeaderContainer typeHeader={type}>
        <ContainerIcons onPress={() => navigation.navigate("Home")}>
          <ArrowLeftHeader color="red" size={30} />
        </ContainerIcons>

        <Percentage>90,86%</Percentage>
        <SubDescription>das refeições dentro da dieta</SubDescription>
      </HeaderContainer>
      <ContainerCards>
        <TitleContainer>Estatísticas gerais</TitleContainer>
        <Card>
          <TitleCard>22</TitleCard>
          <SubTitleCard>
            melhor sequência de pratos dentro da dieta
          </SubTitleCard>
        </Card>

        <Card>
          <TitleCard>109</TitleCard>
          <SubTitleCard>refeições registradas </SubTitleCard>
        </Card>
        <View style={{ flexDirection: "row" }}>
          <Card typeCard="success">
            <TitleCard>99</TitleCard>
            <SubTitleCard>refeições dentro da{"\n"} dieta </SubTitleCard>
          </Card>
          <Card typeCard="danger">
            <TitleCard>10</TitleCard>
            <SubTitleCard>refeições fora da{"\n"} dieta </SubTitleCard>
          </Card>
        </View>
      </ContainerCards>
    </Container>
  );
}
