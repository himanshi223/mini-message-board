import { addMessage } from "../db.js";


const formGet = (req, res)=>{
    res.render("form");
}

const saveMessage = (req, res)=>{
    const text = req.body.message;
    const user = req.body.user;
    const added = new Date();

    addMessage({text, user, added});

    res.redirect("/");
}

export { formGet, saveMessage };