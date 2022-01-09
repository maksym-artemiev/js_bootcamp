const express = require("express");
const router = express.Router();

const { getPosts, getPost, addPost, updatePost, deletePost  } = require("./controller");

router
  .get("/", async (req, res) => {
    const result = await getPosts();
    res.send(result);
  })
  .get("/:id", async (req, res) => {
    const result = await getPost(req.params.id);
    res.send(result);
  })
  .post("/", async (req, res) => {
    const result = await addPost(req.body);
    res.send(result);
  })
  .patch("/:id", async (req, res) => {
    const result = await updatePost(req.params.id, req.body);
    res.send(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await deletePost(req.params.id);
    res.send(result);
  });

module.exports = router;
