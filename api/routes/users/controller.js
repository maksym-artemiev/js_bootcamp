const mongoose = require("mongoose");
const session = mongoose.startSession();
const { User } = require("../../db/models/users");
const { Comment } = require("../../db/models/comments");

async function getAllUsers() {
  try {
    return User.find({});
  } catch (error) {
    console.log("Some problem with search:", error);
  }
}

async function getUser(id) {
  try {
    const result = await User.findOne(id);
    return result;
  } catch (error) {
    console.log("Can`t find a user:", error);
  }
}

async function addUser(dataUser) {
  try {
    await User.create(dataUser);
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t create user:", error);
  }
}

async function updateUser(id, dataUser) {
  try {
    await User.findOneAndUpdate(id, dataUser);
    return {
      status: 200,
    };
  } catch (error) {
    console.log("Can`t update user-info:", error);
  }
}

async function deleteUser(id) {
  try {
    await session.withTransaction(async () => {
      await User.deleteOne({ _id: id });
      await Comment.find({ author: id }).deleteMany({});
    });
    await session.abortTransaction();
    return {
      status: 200,
    };
  } catch (error) {
    console.log(
      "Can`t find and delete user with selected id, look at error:",
      error
    );
  }
}

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
