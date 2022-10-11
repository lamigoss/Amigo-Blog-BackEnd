const router = require('express').Router(); 
const User = require('../model/User'); 
const bcrypt = require('bcrypt'); 

router.get("/", (req, res)=>{
    res.send("hello user")
}); 

router.post("/signup", async (req, res, next) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ ...req.body, password });
        return res.status(201).json(user);
    } catch (error) {
        return next(error);
    }
})

module.exports = router; 