const mongoose = require('../db/connection'); 

const PostSchema = new mongoose.Schema(
    {
    userId:{
        type: String,
        required: true, 
    }, 
    postTitle:{
        type: String, 
        required: true, 
        max: 150, 
        unique: true,
    },
    postDesc:{
        type: String, 
        max: 550, 
    },
    postImg:{
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: [],
    },
},
    {timestamps: true}
);


module.exports = mongoose.model("Post", PostSchema); 