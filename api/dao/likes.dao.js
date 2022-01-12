const { Like } = require("../db/models/likes");
const { Post } = require("../db/models/posts");

async function addLike(options) {
  try {
    const result = await Like.create(options);
    await Post.findOneAndUpdate(
      { _id: result.postId },
      { $push: { likes: result._id } }
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteLike({ id }) {
  try {
    const result = await Like.findOneAndDelete({ id });
    await Post.findOneAndUpdate(
      { _id: result.postId },
      { $pull: { likes: result._id } }
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addLike,
  deleteLike,
};
