const express = require("express");
const app = express();
cors = require("cors");
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

const blogPostController = require("./routes/blogPostController");
app.use("/api/blogpost", blogPostController)
// app.use("/api/auth", authRoute);
// app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend Server is running! Local Host: 8800");
});
