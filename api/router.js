const express = require("express");
const posts = require("./post-mock");
const router = express.Router();

router.get("/posts", (req, res) => {
  res.json({ mockedPosts: posts });
});

router.get("*", (req, res) => {
  res.status(404).send("NOT FOUND. This is an invalid URL.");
});

module.exports = router;
