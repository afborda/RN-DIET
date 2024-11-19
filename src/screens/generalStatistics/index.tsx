import { Text, TouchableOpacity, View } from "react-native";
import {
  Card,
  Container,
  ContainerCards,
  SubTitleCard,
  TitleCard,
  TitleContainer
} from "./styled";

import { useNavigation, useRoute } from "@react-navigation/native";
import Header from "@components/Header";

type Status = "success" | "danger";

export function GeneralStatistics() {
  const navigation = useNavigation();

  const route: any = useRoute();
  const { type } = route.params;

  return (
    <Container>
      <Header type={type} onPress={() => navigation.goBack()} />
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
