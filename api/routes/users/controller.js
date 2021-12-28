const User = require("../../db/models/users");

async function addUser(dataUser) {
  await User.create(dataUser);
  return {
    status: 200,
  };
}

module.exports = {
  addUser,
};
