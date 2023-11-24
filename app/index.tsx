import {Button, View} from "react-native";
import {Link} from "expo-router";

export default function() {
    return <View>
        <Link href={"/camera"} replace asChild>
            <Button title="Start"/>
        </Link>
    </View>
}

