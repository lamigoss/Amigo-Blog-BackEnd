const mongoose = require('../db/connection'); 

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
