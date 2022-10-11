const mongoose = require('../db/connection'); 

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true, 
        min:3,
        max: 20,
        unique: true,
    }, 
    email:{
        type: String, 
        required: true, 
        max: 50, 
        unique: true,
    }, 
    password:{
        type: String,
        required: true, 
        min:6,
    }, 
    profilePicture:{
        type: String,
        default: ""
    }, 
    isAdmin:{
        type: Boolean, 
        default: false, 
    }, 
},
{
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_doc, ret) => {
            // automatically removes password field anytime we use toJson method or .json() in response
            delete ret.password;
            return ret;
        }
    }
}
);


module.exports = mongoose.model("User", UserSchema); 