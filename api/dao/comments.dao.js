const { Comment } = require("../db/models/comments");
const { Post } = require("../db/models/posts");

const findOne = async (id) => {
  try {
    const result = await Comment.findById({ id });
    return result;
  } catch (error) {
    console.log("Cannot find selected comment", error);
  }
};

const updateOne = async (id, data) => {
  try {
    const result = await Comment.findOneAndUpdate(id, data);
    return result;
  } catch (error) {
    console.log("Cannot find selected comment", error);
  }
};

const createNew = async (options) => {
  try {
    const result = await Comment.create(options);
    await Post.findOneAndUpdate(
      { id: result.postId },
      { $push: { comments: result.id } }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (id) => {
  try {
    const result = await Comment.findOneAndDelete({ id });
    await Post.findOneAndUpdate(
      { id: result.postId },
      { $pull: { comments: result.id } }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  findOne,
  updateOne,
  createNew,
  deleteComment,
};
