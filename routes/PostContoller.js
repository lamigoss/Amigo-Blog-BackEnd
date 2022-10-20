const router = require("express").Router();
const Post = require("../model/Post");



//post create a new post 
router.post("/create/:id", async (req, res) => {
    // const newPost = new Post.create(req.body); 
    console.log(req.body)
    try {
      const savedPost = await Post.create({...req.body, imageId: req.params.id})
      const populate = await savedPost.populate('imageId')
      res.status(200).json(savedPost);
    } catch (err) {
      console.log(err)
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
      let posts =  await Post.find({})
      res.status(200).json(posts); 
    } catch (err) {
        return res.status(500).json(err);
    }
  });

//PUT update a post 
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const populate = await post.populate('imageId')

    if(post.userId === req.body.userId) {
        // await post.updateOne({...req.body, imageId: req.params.id});
        await post.replaceOne({imageId: "634e2f7a7878e16ae00d6028"}, {imageId: req.params.id});

        console.log(req.params.id);
        res.status(201).json("the post has been updated");
    } 
  } catch (err) {
    console.log(err);
    res.status(403).json("you can only update your post");
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