import {checkDBExistence} from "./checkDBExistence";
import {deleteAsync, documentDirectory} from "expo-file-system";
import {DB_NAME} from "../history.constants";

export const dropDB = async () => {
    if (await checkDBExistence()) {
        const dbDir = documentDirectory + 'SQLite/';
        await deleteAsync(dbDir + DB_NAME, { idempotent: true });
    }
}