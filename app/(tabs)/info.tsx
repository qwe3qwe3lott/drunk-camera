import {Text, View} from "react-native";
import { Accelerometer } from 'expo-sensors';
import {useEffect, useState} from "react";
import {Subscription} from "expo-modules-core";

export default function() {
    const [{ x, y, z }, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        Accelerometer.setUpdateInterval(1000);
        setSubscription(Accelerometer.addListener(setData));
        return () => {
            subscription && subscription.remove();
            setSubscription(null);
        };
    }, []);

    return <View>
        <Text>
            Главная
        </Text>
        <Text>x: {x}</Text>
        <Text>y: {y}</Text>
        <Text>z: {z}</Text>
    </View>
}

