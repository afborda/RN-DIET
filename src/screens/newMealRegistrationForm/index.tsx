import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

import Header from "@components/Header";
import { Container, Label, ContainerForm } from "./styled";
import { Input } from "@components/Input";
import { InputDate } from "@components/InputDate";
import { ButtonOption } from "@components/ButtonOption";
import { validateDate, validateTime } from "@utils/InputValidate";
import { formatDate, formatTime } from "@utils/Format";

type Status = "success" | "danger";

export default function NewMealRegistrationForm() {
  const [isValidade, setIsValidade] = useState({ date: true, time: false });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  const handleValidadeTextDate = () => {
    const dateIsValid = validateDate(date);
    const timeIsValid = validateTime(time);

    setIsValidade({ date: dateIsValid, time: timeIsValid });
  };

  useFocusEffect(
    useCallback(() => {
      handleValidadeTextDate();
    }, [date, time])
  );

  useEffect(() => {
    const date = formatDate(Date.now());
    const time = formatTime(Date.now());
    setDate(date);
    setTime(time);

    handleValidadeTextDate();
  }, []);

  return (
    <Container>
      <Header onPress={() => navigation.goBack()} />
      <ContainerForm>
        <Input label="Nome" />
        <Input label="Descrição" InputType="description" />
        <View style={{ flexDirection: "row" }}>
          <InputDate
            placeholder="(DD/MM/YYYY)"
            label="Data"
            autoCorrect={false}
            onChangeText={setDate}
            value={date}
            returnKeyType="done"
            isValid={isValidade.date}
            keyboardType="numeric"
          />
          <InputDate
            label="Hora"
            placeholder="(20:00)"
            autoCorrect={false}
            onChangeText={setTime}
            value={time}
            returnKeyType="done"
            isValid={isValidade.time}
            keyboardType="numeric"
          />
        </View>
        <Label>Está dentro da dieta?</Label>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ButtonOption
            label="Está dentro da dieta?"
            type="success"
            title="Salvar"
            onPress={handleValidadeTextDate}
          />
          <ButtonOption
            type="danger"
            title="Não"
            onPress={handleValidadeTextDate}
          />
        </View>
      </ContainerForm>
    </Container>
  );
}
