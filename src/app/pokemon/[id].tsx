import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const PIKACHU = {
  id: 25,
  name: "Pikachu",
  types: ["Electric"],
  height: "0.4 m",
  weight: "6.0 kg",
  description:
    "When several of these Pokémon gather, their electricity can build and cause lightning storms.",
  stats: {
    HP: 35,
    Attack: 55,
    Defense: 40,
    "Sp. Atk": 50,
    "Sp. Def": 50,
    Speed: 90,
  },
};

export default function PokemonDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const pokemon = id === "pikachu" ? PIKACHU : null;

  if (!pokemon) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: id }} />
        <Text style={styles.notFound}>No data for "{id}" yet.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Stack.Screen options={{ title: pokemon.name }} />

      <View style={styles.header}>
        <Text style={styles.number}>#{String(pokemon.id).padStart(3, "0")}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <View style={styles.types}>
          {pokemon.types.map((t) => (
            <View key={t} style={styles.typeBadge}>
              <Text style={styles.typeText}>{t}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.description}>{pokemon.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Info</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>{pokemon.height}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight</Text>
          <Text style={styles.infoValue}>{pokemon.weight}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Base Stats</Text>
        {Object.entries(pokemon.stats).map(([name, value]) => (
          <View key={name} style={styles.statRow}>
            <Text style={styles.statName}>{name}</Text>
            <Text style={styles.statValue}>{value}</Text>
            <View style={styles.statBarBg}>
              <View
                style={[
                  styles.statBarFill,
                  { width: `${Math.min((value / 255) * 100, 100)}%` },
                ]}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  notFound: {
    color: "#6b7280",
    fontSize: 16,
  },
  header: {
    alignItems: "center",
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: "#fef9c3",
    gap: 8,
  },
  number: {
    fontSize: 14,
    color: "#6b7280",
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
  },
  types: {
    flexDirection: "row",
    gap: 8,
  },
  typeBadge: {
    backgroundColor: "#F8D030",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
  },
  typeText: {
    color: "#78580a",
    fontWeight: "600",
    fontSize: 13,
  },
  description: {
    textAlign: "center",
    color: "#374151",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 4,
  },
  section: {
    padding: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#e5e7eb",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  infoLabel: {
    color: "#6b7280",
    fontSize: 15,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: "500",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  statName: {
    width: 70,
    fontSize: 13,
    color: "#6b7280",
  },
  statValue: {
    width: 32,
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
  },
  statBarBg: {
    flex: 1,
    height: 6,
    backgroundColor: "#e5e7eb",
    borderRadius: 3,
    overflow: "hidden",
  },
  statBarFill: {
    height: "100%",
    borderRadius: 3,
    backgroundColor: "#F8D030",
  },
});
