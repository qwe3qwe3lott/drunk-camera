import {Stack} from "expo-router";

export default function () {
    return <Stack>
        <Stack.Screen name="index" options={{title: 'Пьяная камера', headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
}