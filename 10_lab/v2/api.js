const express = require("express");
const commentsController = require("./controllers/comments.controller");

const router = express.Router();
router.get("/comments", commentsController.getComments);
router.get("/comments/:id", commentsController.getComment);
router.post("/comments", commentsController.postComments);


router.use( (req, res) => {
    res.send(400);
})

module.exports = router;