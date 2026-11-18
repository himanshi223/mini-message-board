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
    async(req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).render("form", {errors: errors.array()});
        }
        const message = req.body.message;
        const user = req.body.user; 
        try{
            await insertMessage(message, user);
        }catch(err){
            console.error(err);
            return res.status("500").render("Error", {error: "Cannot add message currently."});
        }
        res.redirect("/");
    }
]

export { formGet, saveMessage };