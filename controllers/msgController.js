import { getMessageById } from "../db.js";

function getMsgById(req, res){
    const { msgId } = req.params;
    const message = getMessageById(msgId);
    if(!message)
        res.status(404).send("Cannot find this message")
    res.render("message-details", {message});
}

export {getMsgById}