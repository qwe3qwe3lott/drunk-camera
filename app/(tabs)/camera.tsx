import {StyleSheet, View, TouchableOpacity} from "react-native";
import {Camera} from "expo-camera";
import {useCallback, useEffect, useRef, useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import * as MediaLibrary from 'expo-media-library'
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import {Accelerometer} from "expo-sensors";
import {Subscription} from "expo-modules-core";
import {computeImageRotation} from "../../feature/postprocess/helpers/computeImageRotation";
import {insertHistoryItem} from "../../feature/history/db/insertHistoryItem";

export default function () {
    const cameraRef = useRef<Camera>(null);
    const [acceleratorMeasurement, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    useEffect(() => {
        Accelerometer.setUpdateInterval(100);

        setSubscription(Accelerometer.addListener(setData));
        return () => {
            subscription && subscription.remove();
            setSubscription(null);
        };
    }, []);

    const takePicture = useCallback(async () => {
        if (cameraRef.current) {
            try {
                const image = await cameraRef.current.takePictureAsync();

                const angle = computeImageRotation(acceleratorMeasurement)

                const processedImage = await manipulateAsync(
                    image.uri,
                    [{ rotate: angle }],
                    { compress: 1, format: SaveFormat.PNG }
                );

                await MediaLibrary.createAssetAsync(image.uri);
                const savedProcessedImage = await MediaLibrary.createAssetAsync(processedImage.uri);

                console.log(savedProcessedImage.uri);

                await insertHistoryItem({
                    width: processedImage.width,
                    height: processedImage.height,
                    uri: processedImage.uri,
                    angle
                })
            } catch (e) {
                console.log(e);

                alert("Something went wrong!");
            }
        }
    }, [acceleratorMeasurement])

    return <View style={styles.container}>
        <Camera style={styles.camera} ref={cameraRef}>
            <TouchableOpacity onPress={takePicture}>
                <Ionicons size={40} name="camera"/>
            </TouchableOpacity>
        </Camera>
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