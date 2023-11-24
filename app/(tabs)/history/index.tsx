import {Button, FlatList, Text, View} from "react-native";
import {Link} from "expo-router";

const data = Array.from({length: 100}, (_, i) => ({id: i + 1}));

export default function () {
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