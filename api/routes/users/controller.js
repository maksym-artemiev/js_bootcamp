const { users } = require("../../services/index");

async function getUser(req, res) {
  const { _id } = req.ctx.requester;
  try {
    const result = await users.getUser({ _id });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find user.",
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
      err: error || "Can`t create user.",
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
      err: error || "Can`t update user.",
    });
  }
}

async function login(req, res) {
  const {login, password} = req.body;
  try {
    const options = {login, password};
    const result = await users.login(options);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({
      err: error || "Login error."
    })
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const result = await users.deleteUser({ id });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err:
        error || "Can`t find and delete user with selected id, look at error.",
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
