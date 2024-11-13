import { StatusBar } from "react-native";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from "@expo-google-fonts/nunito-sans";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import Loading from "@components/Loading";
import Routes from "@routes/index";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
