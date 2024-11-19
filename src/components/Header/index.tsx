import {
  ArrowLeftHeader,
  ContainerIcons,
  HeaderContainer,
  Percentage,
  SubDescription
} from "./styled";

interface Props {
  type?: "success" | "danger";
  onPress: () => void;
}

export default function Header({ type, onPress }: Props) {
  return (
    <HeaderContainer typeHeader={type}>
      <ContainerIcons onPress={onPress}>
        <ArrowLeftHeader size={30} typeHeader={type} />
      </ContainerIcons>

      <Percentage>90,86%</Percentage>
      <SubDescription>das refeições dentro da dieta</SubDescription>
    </HeaderContainer>
  );
}
