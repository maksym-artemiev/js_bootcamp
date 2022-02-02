const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/index");

const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
  toggleLike
} = require("./controller");

router
  .get("/", getPosts)
  .get("/:id", getPost)
  .post("/", auth, addPost)
  .patch("/:id", auth, updatePost)
  .patch("/like/:id", toggleLike)
  .delete("/:id", auth, deletePost);

module.exports = router;
