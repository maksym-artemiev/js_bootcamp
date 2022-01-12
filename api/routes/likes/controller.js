const { likes } = require("../../services/index");

async function addLike(req, res) {
  const { postId, author, createdAt } = req.body;
  try {
    const options = {
      postId,
      author,
      createdAt,
    };
    const result = await likes.addLike(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Something gone wrong.",
    });
  }
}

async function deleteLike(req, res) {
  const { id } = req.params;
  try {
    await likes.deleteLike({ id });
    res.status(200).send();
  } catch (error) {
    res.status(500).send({
      err: error || "Something gone wrong.",
    });
  }
}

module.exports = {
  addLike,
  deleteLike,
};
