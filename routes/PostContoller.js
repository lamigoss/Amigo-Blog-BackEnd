const router = require("express").Router();
const Post = require("../model/Post");



//post create a new post 
router.post("/create", async (req, res) => {
    const newPost = new Post(req.body); 
    try {
      const savedPost = await newPost.save(); 
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).send(err); 
    }
  });

//get a post that was selected 
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all posts 
router.get("/", async (req, res) => {
    
    try {
      let posts =  await Post.find()
      res.status(200).json(posts); 
    } catch (err) {
        return res.status(500).json(err);
    }
  });

//PUT update a post 
router.put("/update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId) {
        await post.updateOne({$set:req.body});
        res.status(201).json("the post has been updated");
    } 
  } catch (err) {
    res.status(403).json("you can only update your post")
}
});

//DELETE delete a post 
router.delete("/:id", async (req, res) => {
    try {
      const user = await Post.findByIdAndDelete(req.params.id);
      res.status(202).json("the post has been deleted");
    } catch (err) {
        res.status(500).json(err); 
    }
  });


module.exports = router;