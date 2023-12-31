import {openOrCreateDB} from "./openOrCreateDB";
import {HistoryItem} from "../history.entity";

export const insertHistoryItem = async (payload: Omit<HistoryItem, 'id'>) => {
    const db = await openOrCreateDB();

    db.transaction((transaction) => {
        transaction.executeSql('INSERT INTO history (height, width, uri, angle, dateTime) VALUES ($1, $2, $3, $4, $5)', [payload.height, payload.width, payload.uri, payload.angle, payload.dateTime]);
    }, console.log);
}