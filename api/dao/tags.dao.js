const { Tag } = require("../db/models/tags");

async function getAllTags() {
  try {
    const result = await Tag.find({});
    return result;
  } catch (err) {
    throw err;
  }
}

async function getOneTag(options) {
  try {
    const result = await Tag.findOne(options);
    return result;
  } catch (err) {
    throw err;
  }
}

async function createTag(options) {
  try {
    const result = await Tag.create(options);
    return result;
  } catch (err) {
    throw err;
  }
}

async function updateTagPostId({ tagName, postId }) {
  try {
    const result = await Tag.findOneAndUpdate(
      { tagName },
      { $push: { postId } }
    );
    return result;
  } catch (err) {
    throw err;
  }
}

async function deleteTag({ tagName }) {
  try {
    await Tag.findOneAndDelete({ tagName });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  updateTagPostId,
  deleteTag,
};
