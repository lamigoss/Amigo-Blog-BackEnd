const mongoose = require("../db/connection");

const imageModelSchema = new mongoose.Schema(
  {
    imageKey: {
      type: String,
      required: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);
 
const imageModel = mongoose.model('imageModel', imageModelSchema);
module.exports = imageModel
