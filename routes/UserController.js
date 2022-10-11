const router = require('express').Router(); 
const User = require('../model/User'); 
const bcrypt = require('bcrypt'); 

router.get("/", (req, res)=>{
    res.send("hello user")
}); 

router.post("/", async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        console.log(newUser)
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err)
        next(err);
    }
});

module.exports = router; 