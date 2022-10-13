const router = require("express").Router();
const BlogPost = require("../model/blogPost");

router.get("/", async (req, res, next) => {
  try {
    const blog = await BlogPost.find({});
    res.status(200).json(blog);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const blog = await BlogPost.create(req.body);
    const populate = await blog.populate('owner');
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
