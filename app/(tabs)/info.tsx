import {Text, View} from "react-native";
import {useEffect} from "react";
import {dropDB} from "../../feature/history/db/dropDB";

export default function() {
    useEffect(() => {
        dropDB();
    }, []);

    return <View>
        <Text>
            Главная
        </Text>
    </View>
}

