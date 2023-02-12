import { StyleSheet } from "react-native";
import Home from "./components/user/Home";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
