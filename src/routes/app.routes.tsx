import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";
import { GeneralStatistics } from "@screens/generalStatistics";
import Home from "@screens/home";
import NewMealRegistrationForm from "@screens/newMealRegistrationForm";

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
      <Screen name="Statistics" component={GeneralStatistics} />
      <Screen name="NewMeal" component={NewMealRegistrationForm} />
      <Screen name="Feedback" component={Feedback} />
    </Navigator>
  );
}
