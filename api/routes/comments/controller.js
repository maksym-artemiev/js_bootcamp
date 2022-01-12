const { comments } = require("../../services/index");

async function addComment(req, res) {
  const { postId, author, textMessage, createdAt } = req.body;
  try {
    const options = {
      postId,
      author,
      textMessage,
      createdAt,
    };
    const result = comments.addComment(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot add a comment.",
    });
  }
}

async function getOneComment(req, res) {
  const { id } = req.params;
  try {
    const result = await comments.findOne(id);

    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot find selected comment.",
    });
  }
}

async function updateComment(req, res) {
  const { id } = req.params;
  const { postId, author, textMessage, createdAt } = req.body;
  try {
    const options = {
      postId,
      author,
      textMessage,
      createdAt,
    };
    const result = await comments.updateComment({ id, options });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot find selected comment.",
    });
  }
}

async function deleteComment(req, res) {
  const { id } = req.params;
  try {
    comments.deleteComment({ id });
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      err: error || "Cannot find selected comment.",
    });
  }
}

module.exports = {
  addComment,
  getOneComment,
  updateComment,
  deleteComment,
};
