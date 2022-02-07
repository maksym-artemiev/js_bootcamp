const jsonwebtoken = require("jsonwebtoken");
const { Comment } = require("../../db/models/comments");
const { Post } = require("../../db/models/posts");

async function addComment(req, res) {
  try {
    const { author, textMessage, postId, createdAt } = req.body;
    let token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "Unauthorized" });
    token = jsonwebtoken.verify(token, "nodemon");

    const userId = token._id;
    const comment = await Comment.create({
      postId,
      textMessage,
      createdAt,
      author: userId,
    });

    await Post.findOneAndUpdate(
      {
        _id: comment.postId,
      },
      { $push: { comments: comment._id } }
    );
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send({
      err: "Cannot add a comment." || error,
    });
  }
}

async function getComments(req, res) {
  try {
    let comments = await Comment.find({
      postId: req.query.postId,
    }).populate("author", "fullName");

    if (!comments) {
      return res
        .status(404)
        .json({ message: "There are no comments to this post." });
    }
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot find selected comments.",
    });
  }
}

async function getComment(req, res) {
  try {
    const comment = await Comment.findOne({ _id: req.params.id });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot find selected comment.",
    });
  }
}

async function updateComment(req, res) {
  const { textMessage } = req.body;
  try {
    const result = await Comment.findOneAndUpdate(
      { _id: req.params.id },
      { textMessage }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot update selected comment.",
    });
  }
}

async function deleteComment(req, res) {
  try {
    await Comment.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Comment is deleted." });
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot delete selected comment.",
    });
  }
}

module.exports = {
  addComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
