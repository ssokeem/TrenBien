import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Near from "../screens/Near";
import District from "../screens/District";
import Recommendation from "../screens/Recommendation";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#FE681B",
      tabBarLabelStyle: {
        marginTop: 4,
        fontSize: 10,
        fontWeight: "300",
      },
      tabBarIconStyle: {
        marginTop: 7,
      },
    }}
  >
    <Tab.Screen
      name="홈"
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={focused ? "ios-home" : "ios-home-outline"}
              size={size}
              color={color}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="내 근처"
      component={Near}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={focused ? "ios-location-sharp" : "ios-location-outline"}
              size={size}
              color={color}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="동네별"
      component={District}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={focused ? "ios-earth" : "ios-earth-outline"}
              size={size}
              color={color}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="나의 취향"
      component={Recommendation}
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={focused ? "ios-person" : "ios-person-outline"}
              size={size}
              color={color}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
