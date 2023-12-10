import {AccelerometerMeasurement} from "expo-sensors";

export const computeImageRotation = ({y}: AccelerometerMeasurement): number  => {
    let angle = Math.asin(Math.max(-1, Math.min(1, y)));

    angle = -Math.ceil(((angle * 180 / Math.PI) - 90));

    return angle;
}