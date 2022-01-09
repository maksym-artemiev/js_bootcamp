const { Post } = require("../../db/models/posts");
const { Comment } = require("../../db/models/comments");
const { Like } = require("../../db/models/likes");

async function getPosts() {
  try {
    const result = await Post.find({});
    return result;
  } catch (error) {
    console.log("Can`t find a list of posts:", error);
  }
}

async function getPost(id) {
  try {
    const result = await Post.findOne(id);
    return result;
  } catch (error) {
    console.log("Can`t find a post:", error);
  }
}

async function addPost(post) {
  try {
    await Post.create(Object.assign(post));
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t add a post:", error);
  }
}

async function updatePost(id, data) {
  try {
    await Post.findOneAndUpdate(id, data);
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t update a post:", error);
  }
}

async function deletePost(id) {
  try {
    await Post.deleteOne({ _id: id });
    await Like.find({ postId: id }).deleteOne({});
    await Comment.find({ postId: id }).deleteOne({});
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t delete a post:", error);
  }
}

module.exports = {
  getPost,
  addPost,
  getPosts,
  updatePost,
  deletePost,
};
