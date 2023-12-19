import {FlatList, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {HistoryItem} from "../../../feature/history/history.entity";
import {selectAllHistoryItems} from "../../../feature/history/db/selectAllHistoryItems";
import {HistoryListItem} from "../../../feature/history/components/HistoryListItem";
import {calculatePercents} from "../../../feature/history/history.util";

export default function () {
    const [data, setData] = useState<HistoryItem[]>([]);
    const [average, setAverage] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            const data = await selectAllHistoryItems();

            setData(data);

            setAverage(Math.ceil(data.reduce((prev, cur) => {
                return prev + calculatePercents(cur.angle)
            }, 0) / data.length))
        })();
    }, []);

    return <View style={styles.container}>
        {!!average && <Text style={styles.percents}>Средняя точность: {average}%</Text>}
        {!!data.length && <FlatList style={styles.list} data={data} renderItem={({item}) => {
            return <HistoryListItem item={item}/>
        }}/>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        flex: 1,
        padding: 15,
        gap: 15
    },
    list: {
        borderTopColor: '#024989',
        borderTopWidth: 1,
        borderStyle: 'solid'
    },
    percents: {
        color: '#07841B',
        fontSize: 24
    }
})
