const { Post } = require("../../db/models/posts");
const { Comment } = require("../../db/models/comments");
const { Like } = require("../../db/models/likes");

async function getPosts() {
  return await Post.find({});
}

async function addPost(post) {
  await Post.create(Object.assign(post));
  return {
    status: 200,
  };
}

async function updatePost(id, data) {
  console.log(id);
  await Post.findByIdAndUpdate(id, data);
  return {
    status: 200,
  };
}

async function removePost(id) {
  await Post.remove({ _id: id });
  await Like.find({ postId: id }).remove({});
  await Comment.find({ postId: id }).remove({});
  return {
    status: 200,
  };
}

module.exports = {
  addPost,
  getPosts,
  updatePost,
  removePost,
};
