import { Container, ContainerScroll, Title } from "./styled";
import Button from "@components/Button";
import CardList from "@components/CardList";
import Header from "@components/Header";
import { Input } from "@components/Input";
import { InputDate } from "@components/InputDate";
import { useFocusEffect } from "@react-navigation/native";
import { formatDate, formatTime } from "@utils/Format";
import { validateDate, validateTime } from "@utils/InputValidate";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

export default function Home() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isValidade, setIsValidade] = useState({ date: true, time: false });

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
    validateDate(setDate(formatDate(Date.now())));
    validateTime(setTime(formatTime(Date.now())));
  }, []);

  // useEffect(() => {
  //   handleValidadeTextDate();
  // }, [date, time]);

  return (
    <Container>
      <ContainerScroll>
        <Header />
        <Title>Refeições</Title>
        <Button
          label="Nova refeição"
          type="primary"
          onPress={handleValidadeTextDate}
        />
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

        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </ContainerScroll>
    </Container>
  );
}
