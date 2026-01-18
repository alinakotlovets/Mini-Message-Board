import messages from "../db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";
function getMessageByIdFromBd(messageId){
    return messages.find(message => message.id === Number(messageId));
}

function getMessageById(req, res){
    const {messageId} = req.params;
    const message = getMessageByIdFromBd(messageId);
    if(!message){
        throw new CustomNotFoundError("Message non found");
    }

    const messageWithFormattedDate = {
        ...message,
        formattedDate: message.date.toLocaleString("uk-UA")
    };

    res.render("messageInfoPage", { message: messageWithFormattedDate });
}
export default getMessageById;