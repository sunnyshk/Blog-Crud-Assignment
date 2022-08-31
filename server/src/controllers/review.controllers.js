const express = require("express");

const router = express.Router();

const Review = require("../models/reviews.models");
const Blog = require("../models/blogs.models");

router.post("", async (req, res) => {
  try {
    const id = req.query.id;
    const review = new Review({
      userId: req.body.userId,
      description: req.body.description,
      post: id,
    });
    console.log(review);
    await review.save();
    const thePost = await Blog.findById(id);
    thePost.reviews.push(review);
    await thePost.save();
    return res.status(201).send(thePost);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("", async (req, res) => {
  try {
    let thePost = await Blog.findById(req.query.id);
    const { reviews } = thePost;
    console.log(reviews);
    let toDel = await Blog.updateOne(
      {},
      { $pull: { reviews: { $in: [req.body.id] } } }
    );

    return res.status(201).send(toDel);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
