const express = require("express");
const router = express.Router();

const {
  addComment,
  getComments,
  getComment,
  deleteComment,
  updateComment,
} = require("./controller");

router
  .post("/", addComment)
  .get("/", getComments)
  .get("/:id", getComment)
  .patch("/:id", updateComment)
  .delete("/:id", deleteComment);

module.exports = router;
