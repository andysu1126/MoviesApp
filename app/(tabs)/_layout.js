import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { Text } from "react-native";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

function Layout() {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color, textTransform: "capitalize" }}>
              {focused ? "Movies" : "movies"}
            </Text>
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="search"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color, textTransform: "capitalize" }}>
              {focused ? "Search Results" : "search results"}
            </Text>
          ),
        }}
      />
      <MaterialTopTabs.Screen
        name="tv"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text style={{ color, textTransform: "capitalize" }}>
              {focused ? "TV Shows" : "tv shows"}
            </Text>
          ),
        }}
      />
    </MaterialTopTabs>
  );
}

export default Layout;
