import { View, Text } from "react-native";
import { Container, Title, ContainerButton } from "./styled";
import { Plus } from "phosphor-react-native";

type Props = {
  label: string;
  type?: "primary" | "secondary";
};

export default function Button({ label, type = "primary" }: Props) {
  return (
    <Container>
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
