const router = require("express").Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const { createUserToken } = require("../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password });
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne(
      { username: req.body.username } || { password: req.password }
    );
    if(user.isAdmin) {
        const token = createUserToken(req, user)
        res.status(201).json({ token, user })
    } else {
        return res.json({ user })
    }
  } catch (error) {
    next(error);
  }
});
module.exports = router;
