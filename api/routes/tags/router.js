const express = require("express");
const router = express.Router();

const { getAllTags, getOneTag, createTag, deleteTag } = require("./controller");

router
.get("/", async(req, res) => {
  const result = await getAllTags();
  res.send(result);
})
.get("/:id", async (req, res) => {
  const result = await getOneTag(req.params.id);
  res.send(result);
})
  .post("/", async (req, res) => {
    const result = await createTag(req.body);
    res.send(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await deleteTag(req.params.id);
    res.send(result);
  });

module.exports = router;
