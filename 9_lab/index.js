const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const path = require("node:path");

const restV3 = require("./v3/api");

const port = 9000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public/")));

// log every query
app.use(morgan("dev"));
app.use(helmet());

// routers
app.use("/v3", restV3);


app.listen(port, "localhost", () => {
    console.log(`Server is running on localhost:${port}`);
})