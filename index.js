const express = require('express'); 
const app = express(); 
cors = require('cors')
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require("morgan");


// MIDDLEWARE
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("common"));

app.get('/', (req, res) => {
    res.redirect('api/users');
});

// ROUTES 
const userController = require('./routes/UserController')
app.use("/api/users", userController); 
// app.use("/api/auth", authRoute); 
// app.use("/api/posts", postRoute); 


app.listen(8800,()=>{
    console.log("Backend Server is running! Local Host: 8800"); 
})