import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function RootLayout() {
  return (
    <NativeTabs tintColor="#ef4444">
      <NativeTabs.Trigger name="index">
        <Icon sf="list.bullet" />
        <Label>Pokédex</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favourites">
        <Icon sf="star.fill" />
        <Label>Favourites</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
