const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  like: [{ type: Schema.Types.ObjectId, ref: "User" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
