import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ef4444",
        tabBarInactiveTintColor:"#6b7280 ",
        tabBarStyle: {backgroundColor: "#ffffff", borderTopColor: "#e5e7eb" },
        headerStyle: { backgroundColor: "#ef4444" },
        headerTintColor: "#ffffff",
      }} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Pokédex",
          tabBarIcon: ({ color }) => (
            <SymbolView name="list.bullet" tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <SymbolView name="star.fill" tintColor={color} />
          ),
        }}
      />
    </Tabs>
  );
}
