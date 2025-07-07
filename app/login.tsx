// app/login.tsx
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from "../lib/supabase";

export default function LoginScreen() {
  const [email, setEmail] = useState("mayerling.rodriguez@mprsoluciones.com");
  const [password, setPassword] = useState("123456789");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Login exitoso", `Bienvenida, ${email}`);
      router.replace("/(tabs)/(accountant)");
    }

    setLoading(false);
  };

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      <Text className="text-2xl text-[#8CC004] font-[Poppins-SemiBold] mb-6">
        Iniciar sesión
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#8CC004"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        className="w-full border-2 border-[#8CC004] rounded-full px-5 py-3 mb-4 text-[#8CC004] font-[Poppins-Regular] bg-white"
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#8CC004"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="w-full border-2 border-[#8CC004] rounded-full px-5 py-3 mb-6 text-[#8CC004] font-[Poppins-Regular] bg-white"
      />

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        className={`w-full rounded-full border-2 py-3 items-center ${
          loading
            ? "bg-[#8CC004] border-[#8CC004]"
            : "bg-white border-[#8CC004]"
        }`}
      >
        <Text
          className={`font-[Poppins-Regular] ${
            loading ? "text-white" : "text-[#8CC004]"
          }`}
        >
          {loading ? "Iniciar sesión" : "Iniciar sesión"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
