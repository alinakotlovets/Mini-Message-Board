import express from "express";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import messageInfoRouter from "./routes/messageInfoRouter.js";
import * as path from "node:path";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/message/", messageInfoRouter);
app.use("/new", newMessageRouter);
app.use("/", indexRouter);


const port =  process.env.PORT || 8080;

app.listen(port, (error)=>{
    if(error){
        throw error;
    }
    console.log(`the host is running on port ${port}`)
})

app.use((req, res, next) => {
    const err = new CustomNotFoundError("Page not found");
    next(err);
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});
