;
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function Screen4() {

    return (
      <View>
        <Button
        title ='Trang chủ'
        onPress = {() => router.replace('/' as any)}/>
      </View>
    )}