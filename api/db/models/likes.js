const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  author: {
    type: mongoose.Types.ObjectId,
    // required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };
