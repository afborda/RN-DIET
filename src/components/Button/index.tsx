import { View, Text, TouchableOpacityProps } from "react-native";
import { Container, Title, ContainerButton } from "./styled";
import { Plus } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  label: string;
  type?: "primary" | "secondary";
  onPress?: () => void;
};

export default function Button({ label, type = "primary", onPress }: Props) {
  return (
    <Container onPress={onPress}>
      {type === "primary" && (
        <ContainerButton>
          <Plus size={18} color="#fff" />
          <Title>{label}</Title>
        </ContainerButton>
      )}
      {type === "secondary" && (
        <>
          <Title>{label}</Title>
        </>
      )}
    </Container>
  );
}
