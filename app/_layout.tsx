import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";

export default function RootLayout() {
  return (
    <Tabs>
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
