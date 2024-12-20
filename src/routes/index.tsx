import { View } from "react-native";
import { useTheme } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export default function Routes() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: theme.COLORS.gray_7 }}>
        <AppRoutes />
      </View>
    </NavigationContainer>
  );
}
