import {Router} from "express";
import {addNewMessage} from "../controllers/messageControlers.js";


const newMessageRouter = Router();

newMessageRouter.get("/", (req, res)=>{
    res.render("addMassagePage");
})

newMessageRouter.post("/", addNewMessage)

export default newMessageRouter;