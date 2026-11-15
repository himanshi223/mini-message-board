import { Router } from "express";
import { getMessages } from "../db.js";
import { getMsgById } from "../controllers/msgController.js";

const messages = getMessages();

const indexRouter = Router();

indexRouter.get("/", (req, res)=>{
    res.render("index", {title: "Messages", messages});
})

indexRouter.get("/message/:msgId", getMsgById)

export default indexRouter;