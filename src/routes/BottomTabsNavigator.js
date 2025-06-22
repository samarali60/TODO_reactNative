import Entypo from "@expo/vector-icons/Entypo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";
import StackNavigator from "./StackNavigator";
import Completed from "../pages/Completed";

 export const PATH = {
    HOME: "Home",
    DETAILS: "Todos",
    COMPLETED: "Completed"
  };
const BottomTabsNavigator = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ 
        headerShown: true, 
        headerTitleAlign: "center",
        headerTitleStyle: { color: "teal" },
        headerStyle: { backgroundColor: "#fff" },
        headerShadowVisible: true,
        tabBarStyle: { display: "flex" },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "gray",}}>
        <Screen
          name={PATH.HOME}
          component={StackNavigator}
          options={{
            headerTitle: "TODO APP",
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size, focused }) => (
              <Entypo name="home" size={24} color={focused ? "teal" : "gray"} />
            ),
          }}
        />

        <Screen
          name={PATH.COMPLETED}
          component={Completed}
          options={{
            headerTitle: "Todos",
            tabBarLabel: "Todos",
            tabBarIcon: ({ color, size, focused }) => (
              <Entypo name="list" size={24} color={focused ? "teal" : "gray"} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default BottomTabsNavigator;
