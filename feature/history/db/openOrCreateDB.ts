import {openDatabase} from "expo-sqlite";
import {DB_NAME} from "../history.constants";
import {checkDBExistence} from "./checkDBExistence";

export async function openOrCreateDB() {
    if (await checkDBExistence()) return openDatabase(DB_NAME);

    const db = openDatabase(DB_NAME);

    db.transaction((transaction) => {
        transaction.executeSql('CREATE TABLE  history ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "height" INTEGER NOT NULL, "width" INTEGER NOT NULL, "uri" TEXT NOT NULL, "angle" INTEGER NOT NULL)');
    }, console.log);

    return db;
}