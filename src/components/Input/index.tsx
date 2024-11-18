import { useTheme } from "styled-components/native";
import { Container, Label } from "./styled";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label?: string;
  InputType?: "simple" | "description";
};

export function Input({
  inputRef,
  label,
  InputType = "simple",
  ...rest
}: Props) {
  const { COLORS } = useTheme();

  const theme = useTheme();

  return (
    <>
      <Label>{label}</Label>
      <Container
        typeInput={InputType}
        placeholderTextColor={COLORS.gray_2}
        ref={inputRef}
        multiline={InputType === "description"}
        numberOfLines={InputType === "description" ? 4 : 1}
        maxLength={InputType === "description" ? 300 : 50}
        {...rest}
      />
    </>
  );
}
