const mongoose = require("../db/connection");

const PostSchema = new mongoose.Schema(
  {
    imageUrl: String,
    username: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      required: true,
      max: 150,
    },
    postDesc: {
      type: String,
      max: 550,
    },
    imageId: {
      // type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: "imageModel",
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
