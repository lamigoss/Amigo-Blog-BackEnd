const router = require("express").Router();
const Comment = require("../model/Comment");

router.post("/",  async (req, res, next)=>{
    const newComment = new Comment({...req.body, userId: req.body.userId})
 try {
    const savedComment = await newComment.save();
    const populate = await savedComment.populate("postId");

    console.log("error reslove please"+savedComment);
    res.status(200).send(savedComment);
 } catch (err) {
     next(err);
 }
});


//get all comments on a post 
router.get("/:postId", async (req, res)=>{

 try {
    const comments = await Comment.find({postId: req.params.postId});
    res.status(200).send(comments);
 } catch (err) {
    next(err)
     console.log(err);
 }
});


//delete a comment 
router.delete("/:postId/:commentId", async (req, res)=>{

    try {
       const post = await Comment.findOneAndDelete({_id: req.params.commentId});
    //    const comment =  post.find({_id: req.params.commentId});
       res.status(200).send("comment deleted");
    } catch (err) {
       next(err)
        console.log(err);
    }
   });


module.exports = router; 