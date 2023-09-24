const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const path = require("node:path");
const restV2 = require("./v2/api");
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public/")));

// log every query
app.use(morgan("dev"));
app.use(helmet());

app.use("/v2", restV2);
const port = 9000;

app.listen(port, "localhost", () => {
    console.log("Server is running on localhost:${port}");
})