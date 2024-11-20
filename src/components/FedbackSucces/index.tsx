import { Container, Title, SubTitle, Image } from "./styled";
import Button from "@components/Button";

type FeedbackSuccesProps = {
  onPress: () => void;
  type: "success" | "danger";
};

export const FeedbackSucces = ({ onPress, type }: FeedbackSuccesProps) => {
  return (
    <Container>
      {type === "danger" ? (
        <>
          <Title type={type}>Que pena!</Title>
          <SubTitle>
            Você saiu da dieta dessa vez, mas continue se esforçando e não
            desista!
          </SubTitle>

          <Image
            source={require("../../assets/illustration/IllustrationSad.png")}
          />
        </>
      ) : (
        <>
          <Title type={type}>Continue assim!</Title>
          <SubTitle>Você continua dentro da dieta. Muito bem!</SubTitle>

          <Image
            source={require("../../assets/illustration/IllustrationHappy.png")}
          />
        </>
      )}

      <Button label="Ir para a página inicial" onPress={onPress} />
    </Container>
  );
};
