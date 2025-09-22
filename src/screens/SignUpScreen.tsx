import { Image, KeyboardAvoidingView, Platform, StatusBar, Text, View } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeProvider";

export default function SignUpScreen() {

    const { applied } = useTheme();
    const logo =
        applied === "dark"
            ? require("../../assets/logo-dark.png")
            : require("../../assets/logo.png");

    return (
        <AlertNotificationRoot>
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "height" : "padding"}
                className="flex-1 justify-center items-center dark:bg-slate-950"
            >
                <SafeAreaView className="p-5">
                    <StatusBar hidden={true} />
                    <Image source={logo} className="h-40 w-36" />
                    <View className="w-full justify-start items-start">
                        <Text className="font-bold text-slate-500 dark:text-slate-100">
                            Create your account and start the conversation TODAY
                        </Text>
                    </View>
                    <View className="w-full">
                        
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </AlertNotificationRoot>

    );
}