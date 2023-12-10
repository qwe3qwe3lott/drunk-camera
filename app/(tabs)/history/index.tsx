import {Button, FlatList, View} from "react-native";
import {Link} from "expo-router";
import {useEffect, useState} from "react";
import {HistoryItem} from "../../../feature/history/history.entity";
import {selectAllHistoryItems} from "../../../feature/history/db/selectAllHistoryItems";

export default function () {
    const [data, setData] = useState<HistoryItem[]>([]);

    useEffect(() => {
        (async () => {
            const data = await selectAllHistoryItems();

            setData(data);
        })();
    }, []);

    return <View>
        <FlatList data={data} renderItem={({item}) => {
            return <View>
                <Link href={`/history/${item.id}`} asChild>
                    <Button title={`Итем ${item.id}`}/>
                </Link>
            </View>
        }}/>
    </View>
}