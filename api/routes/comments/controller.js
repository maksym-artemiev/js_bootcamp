const mongoose = require("mongoose");
const { Post } = require("../../db/models/posts");
const { Comment } = require("../../db/models/comments");

async function getAllComments() {
  try {
    return Comment.find({});
  } catch (error) {
    console.log(error);
  }
}

async function addComment(data) {
  try {
    const comment = new Comment({
      author: new mongoose.Types.ObjectId(data.author),
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
  } catch (error) {
    console.log("Operation is not possible, look at error message:", error);
  }
}

async function getOneComment(id) {
  try {
    return Comment.find({ id });
  } catch (error) {
    console.log("Cannot find selected comment", error);
  }
}

async function updateComment(id, data) {
  try {
    await Comment.findOneAndUpdate(id, data);
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Cannot find selected comment", error);
  }
}

async function deleteComment(id) {
  try {
    const comment = await Comment.findById({
      _id: new mongoose.Types.ObjectId(id),
    });
    await Post.updateOne(
      { _id: comment.postId },
      { $pull: { comments: comment._id } }
    );
    await Comment.deleteOne({ _id: comment._id });
    return {
      status: 400,
    };
  } catch (error) {
    console.log("Cannot find selected comment", error);
  }
}

module.exports = {
  addComment,
  getOneComment,
  updateComment,
  deleteComment,
};
