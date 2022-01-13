const { users } = require("../../services/index");

async function getUser(req, res) {
  const { id } = req.params;
  try {
    const result = await users.getUser({ id });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({
      err: error || "Can`t find user.",
    });
  }
}

async function addUser(req, res) {
  const { firstName, lastName, userName, login, email, password } = req.body;
  try {
    const options = {
      firstName,
      lastName,
      userName,
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
  deleteUser,
};
