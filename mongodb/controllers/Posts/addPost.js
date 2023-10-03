const Post = require("./../../schemas/post")

const addPost = async (req, res) => {
  try {
    const { postDetails, user_id, content } = req.body;

    const newPost = new Post({
      postDetails,
      user_id,
      content,
    });

    await newPost.save();

    res.status(201).json({ message: 'Post created successfully', post_id: newPost.post_id });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  addPost,
};
