const express = require("express");

const app = express();

app.use(express.json());

const blogController = require("./src/controllers/blog.controllers");

const reviewController = require("./src/controllers/review.controllers");

app.use("/blogs", blogController);

app.use("/createBlog", blogController);

app.use("/getBlog", blogController);

app.use("/updateBlog", blogController);

app.use("/deleteBlog", blogController);

app.use("/blog/postReview", reviewController);

app.use("/blog/deleteReview", reviewController);

module.exports = app;
