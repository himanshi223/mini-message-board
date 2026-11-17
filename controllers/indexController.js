import { getMessageById } from "../db.js";
import { getMessages } from "../db.js";

const messages = getMessages();

const displayMessages = (req, res)=>{
    res.render("index", {title: "Messages", messages});
}

const getMsgById = (req, res)=>{
    const { msgId } = req.params;
    const message = getMessageById(msgId);
    if(!message)
        res.status(404).send("Cannot find this message")
    res.render("message-details", {message});
}

export { displayMessages, getMsgById }