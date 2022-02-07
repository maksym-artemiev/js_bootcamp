const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

function toHashPassword(req, res, next) {
  try {
    const { password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    req.body.password = passwordHash;
    next();
  } catch (err) {
    next(err);
  }
}

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization;
    const data = jsonwebtoken.verify(token, "nodemon");
    req.ctx = { requester: data };
    next();
  } catch (error) {
    next({ error: "Can`t authorized user." });
  }
}

async function checkAccess(req, res, next) {
  if (req.ctx.requester._id === req.body.author) {
    next();
  } else {
    next("Access is denied.");
  }
}

module.exports = {
  toHashPassword,
  auth,
  checkAccess,
};
