const { User } = require("../db/models/users");

async function getUser({ _id }) {
  try {
    return User.findOne({_id: _id}).select('-password');
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

async function update(options) {
  try {
    const user = await User.findOneAndUpdate(options);
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

async function deleteUser({ _id }) {
  try {
    await User.findByIdAndDelete({_id: _id});
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getUser,
  addUser,
  getUserByName,
  deleteUser,
  update,
};
