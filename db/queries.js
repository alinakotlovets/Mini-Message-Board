import {pool} from "./pool.js"

export async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM  messages");
    return rows;
}

export async function getMessageByIdFromBd(messageId){
    const { rows } = await pool.query(
        "SELECT * FROM messages WHERE id = $1", [messageId]);
    return rows;
}

export async function addNewMessageToDb(text, username){
    await pool.query(
        "INSERT INTO messages (text, username, date) VALUES ($1, $2, NOW())",
        [text, username]
    );
}