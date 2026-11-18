import {insertMessage} from "../db/queries.js";
import { body, validationResult, matchedData } from "express-validator";

const requiredErr = "is required and must contain text";

const validate = [
    body("message").trim().notEmpty().withMessage("Message "+requiredErr), 
    body("user").trim().notEmpty().withMessage("Your name "+requiredErr)
]

const formGet = (req, res)=>{
    res.render("form");
}

const saveMessage = [
    validate, 
    (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).render("form", {errors: errors.array()});
        }
        const message = req.body.message;
        const user = req.body.user; 
        insertMessage(message, user);
        res.redirect("/");
    }
]

export { formGet, saveMessage };