import { TouchableOpacityProps } from "react-native";
import { Title, Circle, ContainerButtonOption } from "./styled";

type Props = TouchableOpacityProps & {
  title: string;
  onPress: () => void;
  type?: "success" | "danger";
  label?: string;
};

export function ButtonOption({
  title,
  onPress,
  type = "success",
  label
}: Props) {
  return (
    <>
      <ContainerButtonOption onPress={onPress}>
        <Circle type={type} />
        <Title>{title}</Title>
      </ContainerButtonOption>
    </>
  );
}
