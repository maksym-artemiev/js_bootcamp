const express = require("express");
const router = express.Router();
const { toHashPassword, auth } = require('../../middleware/index');

const { getUser, addUser, login, deleteUser, updateUser } = require("./controller");

router
.get("/profile", auth, getUser)
.post("/",toHashPassword, addUser)
.post("/login", login)
.patch("/", toHashPassword, updateUser)
.delete("/:id", deleteUser);

module.exports = router;
