import {openOrCreateDB} from "./openOrCreateDB";
import {HistoryItem} from "../history.entity";

export const selectAllHistoryItems = async (): Promise<HistoryItem[]> => {
    const db = await openOrCreateDB();

    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM history', [], (_, {rows}) => {
                resolve(rows._array);
            });
        }, console.log);
    });
}