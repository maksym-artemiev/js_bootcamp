const mongoose = require("mongoose");
const { Tag } = require("../../db/models/tags");

async function getAllTags() {
  try {
    return Tag.find({});
  } catch (error) {
    console.log("Can`t find a list of tags:", error);
  }
}

async function getOneTag(id) {
  try {
    const result = await Tag.findOne(id);
    return result;
  } catch (error) {
    console.log("Can`t find tag:", error);
  }
}

async function createTag(data) {
  try {
    const tag = new Tag({
      tagName: data.tagName,
      postId: [],
    });
    tag.save();
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t create tag, look at error", error);
  }
}

async function deleteTag(id) {
  try {
    await Tag.deleteOne({ _id: id });
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t delete or find tag, look at error", error);
  }
}

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  deleteTag,
};
