const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  textMessage: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
