const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: false,
      },
      user_id:{
        type:String,
        default:()=>uuidv4(),
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePic: {
        data: Buffer,
        contentType:String
      },
      refreshToken:{
        type:String,
        required:false
      }
    },
    { timestamps: true }
);

var User = mongoose.model('User', UserSchema, 'user');
module.exports = User;