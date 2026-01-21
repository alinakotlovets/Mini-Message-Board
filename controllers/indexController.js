import {getAllMessages} from "../db/queries.js";
export async function getMessages(req, res){
    const messages = await getAllMessages();
    const formattedMessages = messages.map(msg => ({
        ...msg,
        formattedDate: msg.date.toLocaleString("uk-UA")
    }));
    res.render("index", { messages: formattedMessages });
}