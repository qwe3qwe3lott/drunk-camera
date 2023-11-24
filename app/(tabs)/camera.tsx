import {Text, StyleSheet, View, TouchableOpacity} from "react-native";
import {Camera, PermissionStatus} from "expo-camera";
import {useCallback, useLayoutEffect, useRef, useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library'

export default function () {
    const cameraRef = useRef<Camera>(null)
    // const [cameraPermission, requestCameraPermission] = Camera.useCameraPermissions();
    const [permissions, requestPermissions] = MediaLibrary.usePermissions();

    const hasPermission = !!permissions?.granted;

    useLayoutEffect(() => {
        (async () => {
            await requestPermissions();
            // await requestCameraPermission();
        })()
    }, []);

    const takePicture = useCallback(async () => {
        if (cameraRef.current) {
            try {
                const picture = await cameraRef.current.takePictureAsync();

                await MediaLibrary.createAssetAsync(picture.uri);
            } catch (e) {
                console.log(e);

                alert("Something went wrong!");
            }
        }
    }, [])

    return <View style={styles.container}>
        {hasPermission && <Camera style={styles.camera} ref={cameraRef}>
            <TouchableOpacity onPress={takePicture}>
                <Ionicons size={40} name="camera"/>
            </TouchableOpacity>
        </Camera>}
        {!hasPermission && <Text>Has no permission</Text>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    camera: {
        height: '100%',
        width: '100%',
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 24
    }
})