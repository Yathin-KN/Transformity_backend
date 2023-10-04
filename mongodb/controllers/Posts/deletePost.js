const Post = require('../../schemas/post');

const postDeleteController = async (req, res) => {
  const { user_id, post_id } = req.body;

  const post = await Post.findOne({ post_id: post_id });
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (post.user_id !== user_id) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await Post.deleteOne({ post_id: post_id });

  return res.status(200).json({ message: 'Post deleted successfully' });
};

module.exports ={ postDeleteController};