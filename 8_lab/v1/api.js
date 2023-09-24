const express = require("express");
const path = require("node:path");

const cfg = require("../config.json");


const router = express.Router();

const comments = [
    {
        subject: `Math`,
        Day: 'Friday'
    },
    {
        subject:`Detmash`,
        Day: 'Thursday'
    }

];


const requests = {};


function logRequests(userAgent) {

    let userAgentFindRes = getRequestDataByUserAgent(requests, userAgent);

    //найден
    if (userAgentFindRes !== -1) {
        if (requests[userAgent]) {
            requests[userAgent].requests += 1;
        }
        else {
            requests[userAgent] = {
                "user-agent": userAgent,
                requests: 1
            };
        }
    }
    //не найден
    else {
        requests[userAgent] = {
            "user-agent": userAgent,
            requests: 1
        };
    }


}

function getRequestDataByUserAgent(requestData, userAgentName) {
    const keys = Object.keys(requestData);

    return keys.indexOf(userAgentName);
}

function checkAuth(req, res, next) {
    const params = req.query;
    console.log(params);
    if (!params.apikey || params.apikey !== cfg.apiKey) {
        res.status(401).send("Не передан Api ключ");
    }
    else {
        next();
    }
}

function addcomment(req, res, next) {
    const data = req.body;
    if (!data.subject || !data.day) {
        return res.status(400).send("Не хватает данных");
    }

    comments.push(data);
    res.json(comments);
}




function getcomments(req, res, next) {
    res.json(comments);
}

function getstats(req, res, next) {
    res.json(requests);
}


router.all("/*", checkAuth);

router.use("/", (req, res, next) => {
    const userAgent = req.headers["user-agent"];
    logRequests(userAgent);
    next();
})


router.get("/", (req, res) => {
    res.status(200)
        .header("Content-Type: text/plain")
        .send("Hello ExpressJS");
})

// /api/comments
router.post("/comments", addcomment);
router.get("/comments", getcomments);

// /api/stats
router.get("/stats", getstats);


router.use( (req, res) => {
    res.send(400);
})

module.exports = router;