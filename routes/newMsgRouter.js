import { Router } from "express";
import { addMessage } from "../db.js";

const newMsgRouter = Router();

newMsgRouter.get("/", (req, res)=>{
    res.render("form");
});

newMsgRouter.post("/", (req, res)=>{
    const text = req.body.message;
    const user = req.body.user;
    const added = new Date();

    addMessage({text, user, added});

    res.redirect("/");
})

export default newMsgRouter;