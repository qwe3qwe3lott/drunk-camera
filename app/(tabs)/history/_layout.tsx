import {Stack} from "expo-router";
import {Header} from "../../../feature/layout/components/Header";

export default function () {
    return <Stack>
        <Stack.Screen name="index" options={{header: () => <Header text="История"/>}} />
        <Stack.Screen name="[id]" options={{header: () => <Header text="Элемент истории" backPath="/history"/>}} />
    </Stack>
}