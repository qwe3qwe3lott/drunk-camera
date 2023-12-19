import {StyleSheet, Text, View} from "react-native";
import {dropDB} from "../../feature/history/db/dropDB";
import {useEffect} from "react";

export default function() {
    useEffect(() => {
        dropDB();
    }, []);

    return <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.title}>"Пьяная камера"</Text>
            <Text style={styles.text}>Здесь будет описание приложения</Text>
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
    text: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center'
    }
})