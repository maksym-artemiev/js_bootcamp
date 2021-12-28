const express = require("express");
const router = express.Router();

const { addComment, removeComment, updateComment } = require("./controller");

router
  .post("/", async (req, res) => {
    res.send(await addComment(req.body));
  })
  .put("/:id", async (req, res) => {
    res.send(await updateComment(req.params.id, req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await removeComment(req.params.id));
  });

module.exports = router;
