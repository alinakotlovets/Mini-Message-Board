import {Router} from "express";
import messages from "../db.js";


const newMessageRouter = Router();

newMessageRouter.get("/", (req, res)=>{
    res.render("addMassagePage");
})

newMessageRouter.post("/", (req,res)=>{
    messages.push({
        id: Date.now() + Math.floor(Math.random() * 1000),
        text: req.body.message,
        username: req.body.username,
        date: new Date()
    })
    res.redirect("/");
})

export default newMessageRouter;