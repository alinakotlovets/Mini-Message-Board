import {Router} from "express";
import getMessageById from "../controllers/messageControlers.js";

const messageInfoRouter = Router();

messageInfoRouter.get("/:messageId", getMessageById);

export default messageInfoRouter;