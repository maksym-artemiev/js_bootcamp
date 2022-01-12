const express = require("express");
const router = express.Router();
const { auth, checkAccess } = require("../../middleware/index");

const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} = require("./controller");

router
  .get("/", getPosts)
  .get("/:id", auth, getPost)
  .post("/", auth, addPost)
  .patch("/:id", auth, checkAccess, updatePost)
  .delete("/:id", auth, checkAccess, deletePost);

module.exports = router;
