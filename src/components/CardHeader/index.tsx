import { Image, TouchableOpacityProps, View } from "react-native";
import {
  Container,
  HeaderComponent,
  Card,
  Percentage,
  SubDescription,
  ArrowUpRightIcon
} from "./styled";

type Props = TouchableOpacityProps & {
  onPress: () => void;
  type: "success" | "danger";
};

export default function CardHeader({ onPress, type = "success" }: Props) {
  return (
    <Container>
      <HeaderComponent>
        <Image source={require("../../assets/logo/Logo.png")} />
        <Image source={require("../../assets/user/Ellipse.png")} />
      </HeaderComponent>
      <Card onPress={onPress} typeCard={type}>
        <Percentage>90,86%</Percentage>
        <SubDescription>das refeições dentro da dieta</SubDescription>
        <ArrowUpRightIcon size={24} typeCard={type} />
      </Card>
    </Container>
  );
}
