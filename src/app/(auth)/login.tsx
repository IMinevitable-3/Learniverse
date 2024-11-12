import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, Lock, Eye, EyeOff, ChevronLeft } from "lucide-react-native";
import useAuthStore from "@/src/utils/useAuthStore";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const validateInputs = () => {
    if (!email) {
      Alert.alert("Validation Error", "Email is required.");
      return false;
    }
    if (!password) {
      Alert.alert("Validation Error", "Password is required.");
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateInputs()) return;

    const { setIsLoggedIn } = useAuthStore.getState();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      if (email === "test@gmail.com" && password === "password") {
        console.log("Login successful:", { email, password });
        setIsLoggedIn(true);
        router.replace("/(main)");
      } else {
        Alert.alert("Login Failed", "Invalid email or password.");
      }
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#030426] px-5">
      <View>
        <TouchableOpacity
          onPress={() => router.replace("/(auth)")}
          className="self-start mb-5 relative"
        >
          <View style={{ flexDirection: "row" }} className="gap-0">
            <ChevronLeft color="#A020F0" size={36} />
            {/* <ChevronLeft color="#A020F0" size={24} /> */}
          </View>
        </TouchableOpacity>

        {/* Welcome Text */}
        <View className="self-start m-5">
          <Text className="text-5xl text-left text-white font-semibold">
            Welcome
          </Text>
          <Text className="text-5xl text-left text-purple-400 font-semibold mb-5">
            Back!
          </Text>
        </View>
      </View>

      <View className="flex-1 items-center justify-center">
        {/* Email Input */}
        <View className="flex-row items-center bg-[#1E1E3D] rounded-full px-3 py-2 mb-4 w-full">
          <Mail color="#D3D3D3" size={20} />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#D3D3D3"
            className="text-white flex-1 ml-2"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View className="flex-row items-center bg-[#1E1E3D] rounded-full px-3 py-2 mb-4 w-full">
          <Lock color="#D3D3D3" size={20} />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#D3D3D3"
            secureTextEntry={!passwordVisible}
            className="text-white flex-1 ml-2"
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? (
              <EyeOff color="#D3D3D3" size={20} />
            ) : (
              <Eye color="#D3D3D3" size={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className="w-full mb-4"
        >
          <LinearGradient
            colors={["#873BB4", "#6F28A5"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{
              width: "100%",
              height: 48,
              borderRadius: 24,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text className="text-white text-lg font-bold">
              {loading ? "Logging in..." : "Log In"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity>
          <Link href="/(auth)/forgotPassword">
            <Text className="text-purple-400">Forgot Password?</Text>
          </Link>
        </TouchableOpacity>

        {/* Signup Link */}
        <View className="flex-row mt-5">
          <Text className="text-white">Don't have an account? </Text>
          <Link href="/(auth)/signup">
            <Text className="text-purple-400 font-semibold">Sign up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
