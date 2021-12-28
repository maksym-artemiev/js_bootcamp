const mongoose = require("mongoose");
const { Schema } = mongoose;

const likeSchema = Schema({
  tagName: {
    type: String,
    required: true,
  },
  postId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  ],
});

const Tag = mongoose.model("Tag", likeSchema);

module.exports = { Tag };
