import {Stack} from "expo-router";

export default function () {
    return <Stack>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="[id]" options={{headerShown: false}} />
    </Stack>
}