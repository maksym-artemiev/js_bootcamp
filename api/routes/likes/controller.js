const mongoose = require("mongoose");
const { Post } = require("../../db/models/posts");
const { Like } = require("../../db/models/likes");

async function addLike(data) {
  try {
    const like = new Like({
      author: new mongoose.Types.ObjectId(data.author),
      postId: new mongoose.Types.ObjectId(data.postId),
    });
    like.save();
    await Post.updateOne({ _id: like.postId }, { $push: { like: like._id } });
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Something gone wrong.", error);
  }
}

async function removeLike(id) {
  try {
    const like = await Like.findById({ _id: new mongoose.Types.ObjectId(id) });
    await Post.updateOne({ _id: like.postId }, { $pull: { like: like._id } });
    await Like.deleteOne({ _id: like._id });
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Something gone wrong.", error);
  }
}

module.exports = {
  addLike,
  removeLike,
};
