import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GeneralStatistics } from "@screens/generalStatistics";
import Home from "@screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Statistics"
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <Screen name="Home" component={Home} /> */}
      <Screen name="Statistics" component={GeneralStatistics} />
    </Navigator>
  );
}
