const express = require("express");
const router = express.Router();
const { toHashPassword } = require('../../middleware/index');

const { getUser, addUser, login, deleteUser } = require("./controller");

router
.get("/:id", getUser)
.post("/",toHashPassword, addUser)
.post("/login", login)
.delete("/:id", deleteUser);

module.exports = router;
