const { tags } = require("../../services/index");

async function getAllTags(req, res) {
  try {
    const result = await tags.getAllTags();
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find a list of tags.",
    });
  }
}

async function getOneTag(req, res) {
  const { tagName } = req.params;
  try {
    const options = { tagName };
    const result = await tags.getOneTag(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find tag.",
    });
  }
}

async function createTag(req, res) {
  const { tagName, postId } = req.body;
  try {
    const options = { tagName, postId };

    const result = await tags.createTag(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t create tag, look at error.",
    });
  }
}

async function deleteTag(options) {
  const { id } = req.params;
  try {
    const options = { id };
    const result = await tags.deleteTag(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t delete or find tag, look at error.",
    });
  }
}

module.exports = {
  getAllTags,
  getOneTag,
  createTag,
  deleteTag,
};
