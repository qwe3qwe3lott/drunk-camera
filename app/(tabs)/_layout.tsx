import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function () {
    return <Tabs>
        <Tabs.Screen name="camera" options={{tabBarLabel: "Camera", headerShown: false, tabBarIcon: () => (<Ionicons name="camera"/>)}}/>
        <Tabs.Screen name="history" options={{tabBarLabel: "History", title: "History", tabBarIcon: () => (<Ionicons name="time"/>)}}/>
    </Tabs>
}