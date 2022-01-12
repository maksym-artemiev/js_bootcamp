const express = require("express");
const router = express.Router();

const {
  addComment,
  getOneComment,
  deleteComment,
  updateComment,
} = require("./controller");

router
  .post("/", addComment)
  .get("/:id", getOneComment)
  .patch("/:id", updateComment)
  .delete("/:id", deleteComment);

module.exports = router;
