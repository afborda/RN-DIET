import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
