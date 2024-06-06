import { Stack } from "expo-router";

console.log(process.env.API_KEY);

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitleAlign: "center",

          headerTitle: "Movies App",
          headerStyle: { backgroundColor: "#20315d" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontSize: 18 },
        }}
      />

      <Stack.Screen name="[id]" options={{ headerBackTitle: "Back to List" }} />
    </Stack>
  );
};

export default Layout;
