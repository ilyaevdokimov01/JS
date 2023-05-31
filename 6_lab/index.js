const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const api = require("./v1/api");

const app = express();
app.use(morgan("dev"));
app.use(helmet());


app.use(express.static(path.resolve(__dirname, "public/")))
app.use("/api", api);



app.listen(8000, ()=>{
    console.log("Server started");
})