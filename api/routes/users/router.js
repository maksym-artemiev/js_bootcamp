const express = require("express");
const router = express.Router();

const { getUser, addUser, deleteUser } = require("./controller");

router.get("/:id", getUser).post("/", addUser).delete("/:id", deleteUser);

module.exports = router;
