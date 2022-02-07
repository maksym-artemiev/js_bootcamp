const mongoose = require("mongoose");
const { Schema } = mongoose;

const tagSchema = Schema({
  tagName: {
    type: String,
    required: true,
    unique: true,
  },
  postId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  ],
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = { Tag };
