const mongoose = require("mongoose");
const { Tag } = require("../../db/models/tags");

async function addTag(data) {
  const tag = new Tag({
    tagName: data.tagName,
    postId: [],
  });
  tag.save();
  return {
    status: 200,
  };
}

async function removeTag(_id) {
  await Tag.remove({ _id: Tag._id });
  return {
    status: 400,
  };
}

module.exports = {
  addTag,
  removeTag,
};
