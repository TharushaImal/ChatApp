import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import { useEffect, useRef } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
// import { runOnJS } from "react-native-worklets";
import { useNavigation } from "@react-navigation/native";
import { RootStack } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTheme } from "../theme/ThemeProvider";

type Props = NativeStackNavigationProp<RootStack, 'SplashScreen'>;

export default function SplashScreen() {
  const navigation = useNavigation<Props>();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 3000 });
    const timer = setTimeout(() => {
      navigation.replace("SignUpScreen")
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });

  const { applied } = useTheme();

  const logo =
    applied === "dark"
      ? require("../../assets/logo-dark.png")
      : require("../../assets/logo.png");

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-50 dark:bg-slate-950">
      <StatusBar hidden={true} />
      {/* <CircleShape
        width={200}
        height={200}
        className="bg-slate-900"
        borderRadius={999}
        topValue={-50}
        leftValue={-20}
      /> */}
      <CircleShape
        width={150}
        height={150}
        className="bg-green-400"
        borderRadius={999}
        topValue={100}
        leftValue={6}
      />
      <CircleShape
        width={150}
        height={150}
        className="bg-sky-200"
        borderRadius={999}
        topValue={30}
        leftValue={50}
      />
      <CircleShape
        width={160}
        height={160}
        className="bg-slate-500"
        borderRadius={999}
        topValue={-25}
        leftValue={-50}
      />
      {/* <Animated.View style={{ opacity: fadeIn, alignItems: "center", justifyContent: "center" }}> */}

      <Animated.View style={animatedStyle}>
        <Image
          source={logo}
          style={{ width: 220, height: 180 }}
        />
      </Animated.View>


      {/* </Animated.View> */}
      <Animated.View className="absolute bottom-10" style={animatedStyle}>
        <View className="bottom-0 mb-10 flex-1 flex-col justify-center items-center">
          <Text className="text-xs font-bold text-gray-500">POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}</Text>
          <Text className="text-xs font-bold text-gray-500">VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
        </View>
      </Animated.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  appVersion: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#475569",
  },
  companyName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#475569",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});