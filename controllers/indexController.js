import { getAllMessages, getMessageById } from "../db/queries.js";


const displayMessages = async(req, res)=>{
    const messages = await getAllMessages();
    if(!messages) return res.status(500).render("error", {error: "Internal Server Error"});
    res.render("index", {title: "Messages", messages});
}

const getMsgById = async(req, res)=>{
    const { msgId } = req.params;
    const message = await getMessageById(msgId);
    if(!message) res.status(404).render("error", {error: "Cannot find the message you are looking for"});
    else res.render("message-details", {message});
}

export { displayMessages, getMsgById }