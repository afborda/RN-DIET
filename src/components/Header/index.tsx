import { Image, View } from "react-native";
import {
  Container,
  HeaderComponent,
  Card,
  Percentage,
  SubDescription,
  ArrowUpRightIcon
} from "./styled";

export default function Header({}) {
  return (
    <Container>
      <HeaderComponent>
        <Image source={require("../../assets/logo/Logo.png")} />
        <Image source={require("../../assets/user/Ellipse.png")} />
      </HeaderComponent>
      <Card>
        <Percentage>90,86%</Percentage>
        <SubDescription>das refeições dentro da dieta</SubDescription>
        <ArrowUpRightIcon size={24} color="#000" />
      </Card>
    </Container>
  );
}
