const mongoose = require("mongoose");
const { Post } = require("../../db/models/posts");
const { Comment } = require("../../db/models/comments");

async function addComment(data) {
  const comment = new Comment({
    author: new mongoose.Types.ObjectId(data.userId),
    postId: new mongoose.Types.ObjectId(data.postId),
    textMessage: data.textMessage,
  });
  comment.save();
  await Post.updateOne(
    { _id: comment.postId },
    { $push: { comments: comment._id } }
  );
  return {
    status: 200,
  };
}

async function updateComment(id, data) {
  await Comment.findByIdAndUpdate(id, data);
  return {
    status: 200,
  };
}

async function removeComment(id) {
  const comment = await Comment.findById({
    _id: new mongoose.Types.ObjectId(id),
  });
  await Post.updateOne(
    { _id: comment.postId },
    { $pull: { comments: comment._id } }
  );
  await Comment.remove({ _id: comment._id });
  return {
    status: 400,
  };
}

module.exports = {
  addComment,
  updateComment,
  removeComment,
};
