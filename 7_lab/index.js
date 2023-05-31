const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const api = require("./v1/api");

const app = express();
app.use(morgan("dev"));
app.use(helmet());

app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public/")))
app.use("/api", api);

app.use( (req, res) => {
    res.status(400).send();
})

const port = 9000;
app.listen(port, ()=>{
    console.log(`Server started http://localhost:${port}`);
})