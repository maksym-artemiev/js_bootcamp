const express = require("express");
const router = express.Router();

const { getPosts, addPost, removePost, updatePost } = require("./controller");

router
  .get("/", async (req, res) => {
    res.send(await getPosts());
  })
  .post("/", async (req, res) => {
    res.send(await addPost(req.body));
  })
  .put("/:id", async (req, res) => {
    res.send(await updatePost(req.params.id, req.body));
  })
  .delete("/:id", async (req, res) => {
    res.send(await removePost(req.params.id));
  });

module.exports = router;
