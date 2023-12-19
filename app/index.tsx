import {Button, StyleSheet, Text, View} from "react-native";
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

    return <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.title}>Вы не предоставили приложению необходимые права. Необходимо:</Text>
            <Text style={styles.step}>1. Зайти в настройки телефона</Text>
            <Text style={styles.step}>2. Предоставить права к камере и галерее</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    info: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 10
    },
    title: {
        fontSize: 24,
        color: 'black',
        textAlign: 'center'
    },
    step: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'left'
    }
})