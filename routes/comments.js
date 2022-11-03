const router = require("express").Router();
const Comment = require("../model/Comment");

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const newComment = await Comment.create(req.body);
    const populate = await newComment.populate("postId");
    res.status(200).send(newComment);
  } catch (err) {
    next(err);
  }
});

//get all comments on a post
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).send(comments);
  } catch (err) {
    next(err);
    console.log(err);
  }
});

//delete a comment
router.delete("/:postId/:commentId", async (req, res) => {
  try {
    const post = await Comment.findOneAndDelete({ _id: req.params.commentId });
    res.status(200).send("comment deleted");
  } catch (err) {
    next(err);
    console.log(err);
  }
});

module.exports = router;
