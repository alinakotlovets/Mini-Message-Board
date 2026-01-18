import {Router} from "express";
import messages from "../db.js";

const indexRouter = Router();

indexRouter.get("/", (req, res)=>{
    const formattedMessages = messages.map(msg => ({
        ...msg,
        formattedDate: msg.date.toLocaleString("uk-UA")
    }));
    res.render("index", { messages: formattedMessages });
})


export default indexRouter;