
const mongoose = require("mongoose");
const postschema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  device: {
    type: String,
    required: true,
    enum: ["Laptop", "Tablet", "Mobile"],
  },

  no_if_comments: Number
 
});

const PostModel = mongoose.model("post", postschema);
module.exports = {
  PostModel
};

