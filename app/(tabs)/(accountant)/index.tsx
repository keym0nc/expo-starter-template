// app/(auth)/(accountant)/index.tsx
import { router } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "../../../lib/supabase";

export default function AccountantFirstScreen() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error", "No se pudo cerrar sesión.");
    } else {
      Alert.alert("Sesión cerrada", "Has cerrado sesión correctamente.");
      router.replace("../login");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl font-poppins text-black mb-6">
        Primera página 1
      </Text>

      <TouchableOpacity onPress={handleLogout}>
        <Text className="text-red-600 underline text-sm font-[Poppins-Regular]">
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
