import {Button, Image, Text, View} from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import {HistoryItem} from "../../../feature/history/history.entity";
import {selectHistoryItem} from "../../../feature/history/db/selectHistoryItem";

export default function() {
    const {id} = useLocalSearchParams<{id: string}>();

    const [data, setData] = useState<HistoryItem | null>(null);

    useEffect(() => {
        (async () => {
            const data = await selectHistoryItem(+id);

            setData(data);
        })()
    }, []);

    return <View>
        <Link href={`/history`} asChild>
            <Button title={`Назад`}/>
        </Link>
        {data && <>
            <Text>
                Номер: {data.id}
            </Text>
            <Text>
                Ширина: {data.width}px
            </Text>
            <Text>
                Высота: {data.width}px
            </Text>
            <Text>
                Угол наклона (по часовой стрелке): {data.angle}deg
            </Text>
            <Image source={{uri: data.uri, width: 250, height: 250}}/>
        </>}
    </View>
}

