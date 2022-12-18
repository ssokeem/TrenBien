import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import Stack from "./Stack";
import CateList from "./CateList";

const Nav = createNativeStackNavigator();

const Root = () => (
  <Nav.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Nav.Screen name="Tabs" component={Tabs} />
    <Nav.Screen
      options={{ presentation: "modal" }}
      name="Stack"
      component={Stack}
    />
    <Nav.Screen name="CateList" component={CateList} />
  </Nav.Navigator>
);

export default Root;
