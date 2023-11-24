import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function() {
    const {id} = useLocalSearchParams<{id: string}>();

    return <View>
        <Text>
            Итем №{id}
        </Text>
    </View>
}

