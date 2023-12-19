import {HistoryItem} from "../history.entity";
import {Image, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import {format, parseISO} from "date-fns/index";
import {calculatePercents} from "../history.util";

type Props = {
    item: HistoryItem
}

export const HistoryListItem = ({item}: Props) => {
    return <Link style={styles.link} href={`/history/${item.id}`}>
        <View style={styles.container}>
            <Image source={{uri: item.uri, width: 36, height: 70}} resizeMode="contain"/>
            <View style={styles.texts}>
                <Text style={styles.title}>Точность: {calculatePercents(item.angle)}%</Text>
                <Text style={styles.text}>{format(parseISO(item.dateTime), 'yyyy-MM-dd mm:ss')} / {item.width}x{item.height}px</Text>
            </View>
        </View>
    </Link>
}

const styles = StyleSheet.create({
    link: {
        width: '100%',
        borderBottomColor: '#024989',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 10
    },
    container: {
        flex: 0,
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center'
    },
    texts: {

    },
    title: {
        color: '#07841B',
        fontSize: 24
    },
    text: {
        color: 'gray',
        fontSize: 16
    }
})