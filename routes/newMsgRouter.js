import { Router } from "express";
import { formGet, saveMessage } from "../controllers/newMsgController.js"

const newMsgRouter = Router();

newMsgRouter.get("/", formGet);

newMsgRouter.post("/", saveMessage)

export default newMsgRouter;