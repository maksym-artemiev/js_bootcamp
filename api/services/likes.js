const { likesDao } = require("../dao/index");

async function addLike(options) {
  try {
    const like = await likesDao.addLike(options);
    return {
      data: like,
    };
  } catch (error) {
    throw error;
  }
}

async function deleteLike(options) {
  try {
    await likesDao.deleteLike(options);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addLike,
  deleteLike,
};
