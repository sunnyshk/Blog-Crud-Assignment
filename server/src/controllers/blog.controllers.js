const express = require("express");

const router = express.Router();

const Blog = require("../models/blogs.models");
// const Review = require("../models/reviews.models");

router.get("", async (req, res) => {
  try {
    const getAll = await Blog.find().lean().exec();
    return res.status(200).send(getAll);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(201).send(blog);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const singleBlog = await Blog.findById(req.query.id).lean().exec();
    // console.log(singleBlog, req.query.id);
    return res.status(200).send(singleBlog);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
});

router.patch("", async (req, res) => {
  try {
    const update = await Blog.findByIdAndUpdate(
      {
        _id: req.body.id,
      },
      req.body,
      {
        new: true,
      }
    );
    return res.status(201).send(update);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.delete("", async (req, res) => {
  try {
    let blogToDel = await Blog.deleteOne({
      _id: req.body.id,
    });
    return res.status(201).send(blogToDel);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// router.post("/blog/:id", async (req, res) => {
//   try {
//        const id = req.params.id;
//        const review = new Review({
//          userId: req.body.userId,
//          description: req.body.description,
//          post:id
//        })
//        await review.save();
//        const thePost = await Blog.findById(id);
//        thePost.reviews.push(review)
//        return res.status(200).send(thePost)
//   } catch (error) {
//    console.log(error)
//   }
// });

module.exports = router;
