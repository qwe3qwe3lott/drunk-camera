import {Button, Text, View} from "react-native";
import {Link, router, useNavigation} from "expo-router";
import * as MediaLibrary from "expo-media-library";
import {useLayoutEffect} from "react";

export default function() {
    const [, requestPermissions] = MediaLibrary.usePermissions();

    useLayoutEffect(() => {
        (async () => {
            const response = await requestPermissions();

            if (response.granted) {
                router.replace('/(tabs)/camera');
            }
        })()
    }, []);

    return <View>
        <Text>
            Предоставьте права на камеру и галерею
        </Text>
    </View>
}

