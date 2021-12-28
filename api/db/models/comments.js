const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  author: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  textmessage: {
    required: true,
    type: String,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };
