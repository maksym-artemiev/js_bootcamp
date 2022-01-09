const express = require("express");
const router = express.Router();

const { addLike, removeLike } = require("./controller");

router
  .post("/", async (req, res) => {
    const result = await addLike(req.body);
    res.send(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await removeLike(req.params.id);
    res.send(result);
  });

module.exports = router;
