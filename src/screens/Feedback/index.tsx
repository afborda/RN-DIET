import { FeedbackSucces } from "@components/FedbackSucces";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Container } from "./styled";

export const Feedback = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { type } = route.params;

  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <Container>
      <FeedbackSucces onPress={handleNavigation} type={type} />
    </Container>
  );
};
