const router = require("express").Router();
const Comment = require("../model/Comment");

router.post("/",  async (res, req, next)=>{
 res.setEncoding
//     const newComment = new Comment({...req.body, userId: req.body.userId})
//  try {
//     const savedComment = await newComment.save();
//     res.status(200).send(savedComment);
//  } catch (err) {
//      next(err);
//  }
});

router.get("/", async (res, req)=>{

 try {
    const comments = await Comment.find({postId: req.params.postId});
    res.status(200).json(comments);
 } catch (err) {
     res.error();
 }
});

// router.delete("/posts/:id", async (res, req, next)=>{

//  try {
//     const comment = await Comment.findById(res.params.id);
//     if(req.user.id === comment.userId){
//         await Comment.findByIdAndDelete(req.params.id); 
//         res.status(200).json("the comment has been deleted");
//     } else {
//         return res.error(403, "you can only delete your comment")
//     }
//  } catch (err) {
//      next(err)
//  }
// });


module.exports = router; 