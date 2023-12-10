import {documentDirectory, getInfoAsync} from "expo-file-system";
import {DB_NAME} from "../history.constants";

export const checkDBExistence = async () => {
    const dbDir = documentDirectory + 'SQLite/';
    const fileInfo = await getInfoAsync(dbDir + DB_NAME);
    return fileInfo.exists;
}