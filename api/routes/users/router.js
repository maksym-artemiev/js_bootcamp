const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("./controller");

router
  .get("/", async (req, res) => {
    const result = await getAllUsers();
    res.send(result);
  })
  .get("/:id", async (req, res) => {
    const result = await getUser(req.params.id);
    res.send(result);
  })
  .post("/", async (req, res) => {
    const result = await addUser(req.body);
    res.send(result);
  })
  .patch("/:id", async (req, res) => {
    const result = await updateUser(req.params.id, req.body);
    res.send(result);
  })
  .delete("/:id", async (req, res) => {
    const result = await deleteUser(req.params.id);
    res.send(result);
  });

module.exports = router;
