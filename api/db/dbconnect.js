const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Blog";

module.exports = async function () {
  try {
    await mongoose.connect(uri);
    console.log(`Success connection to ${uri} database.`);
  } catch (err) {
      console.log('Something went wrong, no connection to database.', err.message);
  }
};
