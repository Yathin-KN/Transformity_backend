const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const generate=()=>{
  return "https://soliloquywp.com/wp-content/uploads/2016/08/How-to-Set-a-Default-Featured-Image-in-WordPress.png"
}
const postSchema = new mongoose.Schema({
  postDetails: {
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    postImage:{
      type:String,
      default:()=>generate()
    }
  },
  user_id: {
    type: String,
    required: true,
  },
  post_id: {
    type: String,
    default: () => uuidv4(),
  },
  postDate: {
    type: Date,
    default: Date.now, // This sets the default date to the current date and time
    get: (val) => {
      const date = new Date(val);
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Kolkata' };
      return date.toLocaleDateString('en-IN', options);
    }
  },
  postTime: {
    type: String,
    default: () => {
      const date = new Date();
      const options = { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' };
      return date.toLocaleTimeString('en-IN', options);
    }
  },
  content: [
    {
      type: {
        type: String,
        required: true,
      },
      content: {
        type: mongoose.Schema.Types.Mixed,
      }
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
