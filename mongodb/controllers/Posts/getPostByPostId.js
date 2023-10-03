const Post = require('../../schemas/post');
const User = require('../../schemas/user');
const getPostById = async (req, res) => {
    try {
      const postId = req.params.post_id;
      const post = await Post.findOne({ post_id: postId });
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      const user = await User.findOne({ user_id: post.user_id });
      const { username, email, profilePic } = user;
  
      const postWithUserInfo = {
        ...post.toObject(),
        user_info: {
          username,
          email,
          profilePic
        }
      };
  
      res.status(200).json(postWithUserInfo);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };

module.exports = {
    getPostById
};
  