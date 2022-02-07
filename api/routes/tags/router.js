const express = require("express");
const router = express.Router();

const { getAllTags, getOneTag, createTag, deleteTag } = require("./controller");

router
  .get("/", getAllTags)
  .get("/:id", getOneTag)
  .post("/", createTag)
  .delete("/:id", deleteTag);

module.exports = router;
