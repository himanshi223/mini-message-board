import { Router } from "express";
import { displayMessages, getMsgById } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", displayMessages)

indexRouter.get("/message/:msgId", getMsgById)

export default indexRouter;