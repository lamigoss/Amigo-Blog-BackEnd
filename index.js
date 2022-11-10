const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

// ROUTES
const userController = require("./routes/userController");
app.use("/api/users", userController);

const postController = require("./routes/PostContoller");
app.use("/api/posts", postController);

const imageController = require("./routes/imageController");
app.use("/api/images", imageController);

const commentController = require("./routes/comments");
app.use("/api/comments", commentController);

const PORT = process.env.PORT || 8800
//listening port 
app.listen(PORT, () => {
  console.log("Backend Server is running! Local Host: 8800");
});
