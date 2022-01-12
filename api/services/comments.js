const { commentsDao } = require("../dao/index");

const getOneComment = (id) => commentsDao.findOne(id);

const updateComment = (id, data) => commentsDao.updateOne(id, data);

const addComment = (options) => {
  try {
    const newComment = await commentsDao.createNew(options);
    return {
      data: newComment,
    };
  } catch (error) {
    throw error;
  }
};

const deleteComment = (id) => {
  try {
    await commentsDao.deleteComment(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getOneComment,
  updateComment,
  addComment,
  deleteComment,
};
