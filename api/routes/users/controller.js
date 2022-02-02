const { users } = require("../../services/index");

async function getUser(req, res) {
  const { _id } = req.ctx.requester;
  try {
    const result = await users.getUser({ _id });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: "Can`t find user." || error,
    });
  }
}

async function addUser(req, res) {
  const { fullName, login, email, password } = req.body;
  try {
    const options = {
      fullName,
      login,
      email,
      password,
    };
    const result = await users.addUser(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: "Can`t create user." || error,
    });
  }
}

async function updateUser(req, res) {
  const { fullName, login, email, password } = req.body;
  try {
    const options = {
      fullName,
      login,
      email,
      password,
    };
    const result = await users.updateUser(options);
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: "Can`t update user." || error,
    });
  }
}

async function login(req, res) {
  const { login, password } = req.body;
  try {
    const options = { login, password };
    const result = await users.login(options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: "Login error." || error,
    });
  }
}

function deleteUser(req, res) {
  const { _id } = req.ctx.requester;
  try {
    const result = users.deleteUser({ _id });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err:
        "Can`t find and delete user with selected id, look at error." || error,
    });
  }
}

module.exports = {
  getUser,
  addUser,
  login,
  deleteUser,
  updateUser,
};
