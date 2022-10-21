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
router.delete("/:postId", async (req, res, next)=>{

 try {
    const comment = await Comment.findById(res.params.id);
    if(req.user.id === comment.userId){
        await Comment.findByIdAndDelete(req.params.id); 
        res.status(200).json("the comment has been deleted");
    } else {
        return res.error(403, "you can only delete your comment")
    }
 } catch (err) {
     next(err)
 }
});


module.exports = router; 