const { postsDao } = require("../dao/index");

async function getPosts(options) {
  try {
    const posts = await postsDao.getPosts(options);
    return {
      data: posts,
    };
  } catch (error) {
    throw error;
  }
}

async function getPost(options) {

  try {
    return postsDao.getPost(options);
  } catch (error) {
    throw error;
  }
}

async function addPost(options) {
  try {
    const post = await postsDao.addPost(options);
    return {
      data: post,
    };
  } catch (error) {
    throw error;
  }
}

async function updatePost(id, options) {
  try {
    const updatedPost = await postsDao.updatePost(id, options);
    return updatedPost;
  } catch (error) {
    throw error;
  }
}

async function deletePost(options) {
  try {
    await postsDao.deletePost(options);
    return {
      data: {},
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
