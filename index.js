const express = require('express'); 
const app = express(); 
cors = require('cors')
const helmet = require('helmet');
const morgan = require("morgan");


// MIDDLEWARE
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("common"));



// ROUTES 
const userController = require('./routes/UserController');
const postController = require('./routes/PostContoller');

app.use("/api/users", userController); 
app.use("/api/posts", postController); 

app.listen(8800,()=>{
    console.log("Backend Server is running! Local Host: 8800"); 
})