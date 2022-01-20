const { posts } = require("../../services/index");

async function getPosts(req, res) {
  const { tag } = req.query;
  try {
    const options = { tag };
    const result = await posts.getPosts(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find a list of posts.",
    });
  }
}

async function getPost(req, res) {
  try {
    const result = await posts.getPost(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find a post.",
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
      err: error || "Can`t add a post.",
    });
  }
}

async function updatePost(req, res) {
  const { id } = req.params;
  const { author, title, about, createdAt, tags } = req.body;
  try {
    const options = {
      _id: id,
      options: {
        author,
        title,
        about,
        createdAt,
        tags,
      },
    };

    await posts.updatePost(options);
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t update a post.",
    });
  }
}

async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const options = { id };
    const result = await posts.deletePost(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find/delete a post.",
    });
  }
}

module.exports = {
  getPost,
  addPost,
  getPosts,
  updatePost,
  deletePost,
};
