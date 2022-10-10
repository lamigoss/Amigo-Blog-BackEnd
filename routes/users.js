const router = require('express').Router(); 
const User = require('../model/User'); 
const bcrypt = require('bcrypt'); 

router.get("/", (req, res)=>{
    res.send("hello user")
}); 


module.exports = router; 