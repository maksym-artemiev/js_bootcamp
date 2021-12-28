const express = require("express");
const router = express.Router();

const { addUser } = require("./controller");

router.post("/", async (req, res) => {
  res.send(await addUser(req.body));
});

module.exports = router;
