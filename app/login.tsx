// app/(auth)/login.tsx
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-poppins text-black">Pantalla de Login</Text>
      <TouchableOpacity onPress={() => router.push("/(tabs)/(role1)")}>
        <Text className="text-green-600 underline text-sm mt-4">
          Iniciar Sesión 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/(tabs)/(role2)")}>
        <Text className="text-green-600 underline text-sm mt-4">
          Iniciar Sesión 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/recovery")}>
        <Text className="text-green-600 underline text-sm mt-4">
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
