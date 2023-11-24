import {Tabs} from "expo-router";
import {Ionicons} from "@expo/vector-icons";
import {StyleSheet} from "react-native";
import {Text} from "react-native";

export default function () {
    return <Tabs>
        <Tabs.Screen name="info" options={{tabBarLabel: ({focused}) => (<Text style={{...styles.label, ...(focused && styles.focusedLabel)}}>Главная</Text>), title: "Главная", tabBarIcon: ({focused}) => (<Ionicons name="home" size={20} color={focused ? 'black' : 'gray'}/>)}}/>
        <Tabs.Screen name="camera" options={{tabBarLabel: ({focused}) => (<Text style={{...styles.label, ...(focused && styles.focusedLabel)}}>Камера</Text>), unmountOnBlur: true, headerShown: false, tabBarIcon: ({focused}) => (<Ionicons name="camera" size={20} color={focused ? 'black' : 'gray'}/>)}}/>
        <Tabs.Screen name="history" options={{tabBarLabel: ({focused}) => (<Text style={{...styles.label, ...(focused && styles.focusedLabel)}}>История</Text>), title: "История", tabBarIcon: ({focused}) => (<Ionicons name="time" size={20} color={focused ? 'black' : 'gray'}/>)}}/>
    </Tabs>
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: 'gray'
    },
    focusedLabel: {
        color: 'black'
    }
})