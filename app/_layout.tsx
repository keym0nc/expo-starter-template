// app/_layout.tsx
import { Stack } from "expo-router";
import "../styles/global.css"; // mantiene los estilos NativeWind

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
