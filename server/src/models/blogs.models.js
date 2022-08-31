const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    Title: { type: String, require: true },
    Body: { type: String, require: true },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("blog", blogSchema);
