const express = require("express");
const router = express.Router();

const {
  addComment,
  getOneComment,
  deleteComment,
  updateComment,
} = require("./controller");

router
  .post("/", async (req, res) => {
    const result = await addComment(req.body);
    res.send(result);
  })
  .get("/:id", async (req, res) => {
    const result = await getOneComment(req.params.id);
    res.send(result);
  })
  .patch("/:id", async (req, res) => {
    const result = await updateComment(req.params.id, req.body);
    res.send(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await deleteComment(req.params.id);
    res.send(result);
  });

module.exports = router;
