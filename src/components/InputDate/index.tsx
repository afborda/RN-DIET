import { useTheme } from "styled-components/native";
import { Container, ContainerInput, Label } from "./styled";
import { Text, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label?: string;
  InputType?: "simple" | "description";
  isValid?: boolean;
};

export function InputDate({
  inputRef,
  label,
  InputType = "simple",
  isValid,
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  const theme = useTheme();

  return (
    <Container>
      <Label>{label}</Label>
      <ContainerInput
        typeInput={InputType}
        placeholderTextColor={COLORS.gray_2}
        ref={inputRef}
        {...rest}
      />
      {isValid ? null : <Text style={{ color: "red" }}>Data inválida</Text>}
    </Container>
  );
}
