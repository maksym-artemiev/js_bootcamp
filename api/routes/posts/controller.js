const { posts } = require("../../services/index");
const { Post } = require("../../db/models/posts");

async function getPosts(req, res) {
  const { tag } = req.query;
  try {
    const options = { tag };
    const result = await posts.getPosts(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: "Can`t find a list of posts." || error,
    });
  }
}

async function getPost(req, res) {
  try {
    const result = await posts.getPost(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: "Can`t find a post." || error,
    });
  }
}

async function addPost(req, res) {
  const author = req.ctx.requester._id;
  const { title, about, createdAt, tags } = req.body;
  try {
    const options = {
      author,
      title,
      about,
      createdAt,
      tags,
    };
    const result = await posts.addPost(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: "Can`t add a post." || error,
    });
  }
}

async function updatePost(req, res) {
  const { title, about, createdAt } = req.body;
  try {
    const options = {
      title,
      about,
      createdAt,
    };
    await posts.updatePost(req.params.id, options);
    res.status(200).json({ message: "Post updated." });
  } catch (error) {
    res.status(500).send({
      err: "Can`t update a post." || error,
    });
  }
}

async function deletePost(req, res) {
  try {
    const result = await posts.deletePost(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: "Can`t find/delete a post." || error,
    });
  }
}

async function toggleLike(req, res) {
  try {
    let token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    token = JSON.parse(atob(token.split(".")[1]));
    const userId = token._id;

    const post = await Post.findOne({ _id: req.body.id }, { like: 1 }).lean();
    const isLiked = post.like.some((el) => el.toString().match(userId));
    let likeData = {};

    if (isLiked) {
      likeData = { $pull: { like: userId } };
    } else {
      likeData = { $push: { like: userId } };
    }

    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.body.id },
      likeData,
      { new: true }
    ).populate("author", "fullName");
    return res.status(200).send(updatedPost);
  } catch (error) {
    res.status(500).send({
      err: "Something gone wrong." || error,
    });
  }
}

module.exports = {
  getPost,
  addPost,
  getPosts,
  updatePost,
  deletePost,
  toggleLike,
};
