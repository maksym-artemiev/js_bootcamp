const express = require("express");
const router = express.Router();

const { addTag, removeTag } = require("./controller");

router
  .post("/", async (req, res) => {
    res.send(await addTag(req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await removeTag(req.params.id));
  });

module.exports = router;
