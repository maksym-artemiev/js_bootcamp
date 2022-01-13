const { usersDao } = require("../dao/index");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

async function getUser(options) {
  try {
    const user = await usersDao.getUser(options);
    return {
      data: user,
    };
  } catch (error) {
    throw error;
  }
}

async function addUser(options) {
  try {
    const user = await usersDao.addUser(options);
    return {
      data: "Added succesfully.",
    };
  } catch (error) {
    throw error;
  }
}

async function login({ login, password }) {
  try {
    const user = await usersDao.getUserByName({ login });
    if (!user) {
      return {
        status: 500,
        data: "Error: incorrect login or password.",
      };
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = jsonwebtoken.sign({ login, _id: user._id }, "nodemon");
      return {
        token: token,
      };
    } else {
      return {
        status: 500,
        data: "Error: incorrect login or password.",
      };
    }
  } catch (error) {}
}

async function deleteUser(options) {
  try {
    await usersDao.deleteUser(options);

    return {
      data: {},
    };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  addUser,
  login,
  deleteUser,
};
