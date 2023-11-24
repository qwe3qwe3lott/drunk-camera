import {Stack} from "expo-router";

export default function () {
    return <Stack>
        <Stack.Screen name="index" options={{title: 'Drunk camera'}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
}