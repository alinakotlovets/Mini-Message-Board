import {getMessageByIdFromBd, addNewMessageToDb} from  "../db/queries.js"
import CustomNotFoundError from "../errors/CustomNotFoundError.js";


async function getMessageById(req, res){
    const {messageId} = req.params;

    const rows = await getMessageByIdFromBd(messageId);
    const message = rows[0];
    if(!message){
        throw new CustomNotFoundError("Message non found");
    }

    const messageWithFormattedDate = {
        ...message,
        formattedDate: new Intl.DateTimeFormat("uk-UA", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date(message.date))
    };

    res.render("messageInfoPage", { message: messageWithFormattedDate });
}

export async function addNewMessage(req, res){
    await addNewMessageToDb(req.body.message, req.body.username)
    res.redirect("/");
}


export default getMessageById;