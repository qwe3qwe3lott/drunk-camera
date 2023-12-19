import {Button, Image, StyleSheet, Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {HistoryItem} from "../../../feature/history/history.entity";
import {selectHistoryItem} from "../../../feature/history/db/selectHistoryItem";
import {calculatePercents} from "../../../feature/history/history.util";
import {format, parse, parseISO} from "date-fns";

export default function() {
    const {id} = useLocalSearchParams<{id: string}>();

    const [data, setData] = useState<HistoryItem | null>(null);

    useEffect(() => {
        (async () => {
            const data = await selectHistoryItem(+id);

            setData(data);
        })()
    }, []);

    return <View style={styles.container}>
        {data && <View style={styles.data}>
            <View style={styles.imageWrapper}>
                <Image source={{uri: data.uri, width: 360, height: 700}} resizeMode="contain"/>
            </View>
            <View style={styles.texts}>
                <Text style={styles.percents}>Точность: {calculatePercents(data.angle)}%</Text>
                <Text style={styles.text}>Разрешение: {data.width}x{data.height}px</Text>
                <Text style={styles.text}>Дата и время: {format(parseISO(data.dateTime), 'yyyy-MM-dd mm:ss')}</Text>
            </View>
        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        padding: 15
    },
    data: {
        flex: 1,
        justifyContent: 'space-between'
    },
    imageWrapper: {
        maxHeight: '80%',
        maxWidth: '100%',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texts: {

    },
    percents: {
        color: '#07841B',
        fontSize: 24
    },
    text: {
        color: 'gray',
        fontSize: 16
    }
})

