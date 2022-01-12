const express = require("express");
const router = express.Router();

const { addLike, deleteLike } = require("./controller");

router.post("/", addLike).delete("/:id", deleteLike);

module.exports = router;
