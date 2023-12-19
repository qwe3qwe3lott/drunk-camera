import {Button, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";

type Props = {
    text: string;
    backPath?: string;
}

export const Header = ({text, backPath}: Props) => {
    return <View style={styles.container}>
        {!backPath && <Text style={styles.title}>{text}</Text>}
        {!!backPath && <Link href={backPath} asChild>
            <Text style={styles.title}>{`￩   ${text}`}</Text>
        </Link>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#024989',
        paddingBottom: 10,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        color: 'white'
    }
})