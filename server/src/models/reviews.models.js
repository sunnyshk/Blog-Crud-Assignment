const mongoose = require("mongoose");
// const { v4: uuidv4 } = require("uuid");

const reviewSchema = new mongoose.Schema(
  {
    userId: { type: Number, require: true },
    description: { type: String, require: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "blog" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("review", reviewSchema);
