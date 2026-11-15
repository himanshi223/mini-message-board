import express from "express";
import indexRouter from "./routes/indexRouter.js";
import path from 'node:path';
import newMsgRouter from "./routes/newMsgRouter.js";

const __dirname = import.meta.dirname;
const PORT = 3000;

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use("/", indexRouter);
app.use("/new", newMsgRouter);

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send("Internal Server Error");
})

app.listen(PORT, (error)=>{
    if(error){
        throw error;
    }
    console.log(`Listening on PORT ${PORT}`)
})