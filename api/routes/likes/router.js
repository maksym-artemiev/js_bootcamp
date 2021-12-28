const express = require("express");
const router = express.Router();

const { addLike, removeLike } = require("./controller");

router
  .post("/", async (req, res) => {
    res.send(await addLike(req.body));
  })
  .delete("/:id", async (req, res) => {
    console.log(req.params);
    res.send(await removeLike(req.params.id));
  });

module.exports = router;
