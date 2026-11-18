import {insertMessage} from "../db/queries.js";

const formGet = (req, res)=>{
    res.render("form");
}

const saveMessage = (req, res)=>{
    const message = req.body.message;
    const user = req.body.user; 
    insertMessage(message, user);
    res.redirect("/");
}

export { formGet, saveMessage };