const { tagsDao } = require("../dao/index");

async function getAllTags() {
  try {
    const tags = await tagsDao.getAllTags();
    return {
      data: tags,
    };
  } catch (error) {
    throw error;
  }
}

async function getOneTag(options) {
  try {
    const tags = await tagsDao.getOneTag(options);
    return {
      data: tags,
    };
  } catch (error) {
    throw error;
  }
}

async function createTag(options) {
  try {
    const tag = await tagsDao.createTag(options);
    return {
      data: tag,
    };
  } catch (error) {
    throw error;
  }
}

async function deleteTag(options) {
  try {
    await tagsDao.deleteTag(options);
    return {
      data: {},
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  deleteTag,
};
