import { Image, KeyboardAvoidingView, Platform, Pressable, StatusBar, Text, TextInput, View } from "react-native";
import CountryPicker, { Country, CountryCode } from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
// import { CountryPicker, CountryItem } from "react-native-country-codes-picker";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStack } from "../../App";
import { useNavigation } from "@react-navigation/native";

type ContactProps = NativeStackNavigationProp<RootStack, "ContactScreen">;

export default function ContactScreen() {

    const navigation = useNavigation<ContactProps>();

    const [countryCode, setCountryCode] = useState<CountryCode>("LK");
    const [country, setCountry] = useState<Country | null>(null);
    const [show, setShow] = useState<boolean>(false);

    return (
        <SafeAreaView className="flex-1 bg-red-100 items-center">
            <StatusBar hidden={true} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "android" ? 100 : 100}>
                <View className="p-5 items-center">
                    <View>
                        <Image source={require("../../assets/logo.png")} className="h-40 w-36" />
                    </View>
                    <View>
                        <Text className="text-slate-600 font-bold text-center">
                            We use your contacts to help you find friends who are already on
                            the app. Your contacts stay private.
                        </Text>
                    </View>
                    <View className="mt-5 w-full">
                        <View className="border-b-2 border-b-green-600 justify-center items-center flex-row h-14 my-3">
                            <CountryPicker
                                countryCode={countryCode}
                                withFilter
                                withFlag
                                withCountryNameButton
                                withCallingCode
                                visible={show}
                                onClose={() => {
                                    setShow(false)
                                }}
                                onSelect={(c) => {
                                    setCountryCode(c.cca2);
                                    setCountry(c);
                                    setShow(false);
                                }}
                            />
                            <AntDesign name="caret-down" size={18} style={{ marginTop: 5 }} color="black" />
                        </View>

                        {/* <Pressable className="flex flex-row border-b-4 border-b-green-600 w-full justify-center items-center h-16"
                            onPress={() => { setShow(true) }}>
                            <Text className="font-bold text-lg">Select Country </Text>
                            <AntDesign name="caret-down" size={18} style={{ marginTop: 5 }} color="black" />
                        </Pressable> */}
                        {/* <CountryPicker
                            show={show}
                            lang={"en"}
                            style={{ modal: { height: 300 } }}
                            pickerButtonOnPress={(item) => {
                                setCountryCode(item);
                                setTimeout(() => {
                                    setShow(false);
                                }, 3000)
                            }} /> */}
                        <View className="mt-2 bg-red-100 flex flex-row justify-center">
                            <TextInput inputMode="tel" className="h-16 fnt-bold text-lg border-y-4 border-y-green-600 w-[18%]" placeholder="+94" editable={false} value={country ? `+${country.callingCode}`: `+94`}/>
                            <TextInput inputMode="tel" className="h-16 fnt-bold text-lg border-y-4 border-y-green-600 w-[80%] ml-2" placeholder="7# ### ####" />
                        </View>
                    </View>
                    <View className="mt-16 w-full">
                        <Pressable className="justify-center items-center bg-green-600 w-full h-14 rounded-full"
                            onPress={() => {
                                navigation.replace("AvatarScreen");
                            }}>
                            <Text className="text-xl font-bold text-slate-50">Next</Text>
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}