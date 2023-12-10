import {openOrCreateDB} from "./openOrCreateDB";
import {HistoryItem} from "../history.entity";

export const selectHistoryItem = async (id: number): Promise<HistoryItem> => {
    const db = await openOrCreateDB();

    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM history WHERE id = $1', [id], (_, {rows}) => {
                resolve(rows._array.at(0));
            });
        }, console.log);
    });
}