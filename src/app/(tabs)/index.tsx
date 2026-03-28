import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PokedexList() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <Pressable
        style={({ pressed }) => [styles.row, pressed && styles.pressed]}
        onPress={() => router.push("/pokemon/pikachu")}
      >
        <Text style={styles.number}>#025</Text>
        <Text style={styles.name}>Pikachu</Text>
        <Text style={styles.chevron}>›</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e5e7eb",
    gap: 16,
  },
  pressed: {
    backgroundColor: "#f5f5f5",
  },
  number: {
    fontSize: 14,
    color: "#9ca3af",
    width: 40,
  },
  name: {
    flex: 1,
    fontSize: 17,
    fontWeight: "500",
  },
  chevron: {
    fontSize: 22,
    color: "#9ca3af",
  },
});
