const { User } = require("../db/models/users");

async function getUser({ id }) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
}

async function addUser(options) {
  try {
    const user = await User.create(options);
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserByName({ login }) {
  try {
    const user = await User.findOne({ login });
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUser({ id }) {
  try {
    await User.findOneAndDelete(id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  addUser,
  getUserByName,
  deleteUser,
};
