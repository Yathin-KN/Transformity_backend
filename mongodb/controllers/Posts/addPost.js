const Post = require("./../../schemas/post");
const Category = require("./../../schemas/category"); 

const addPost = async (req, res) => {
  try {
    const { postDetails, user_id, content } = req.body;
    const filteredContent = content.filter(item => item !== null);
    content=filteredContent;
    console.log("--",content)
    const categories = postDetails.categories;
    console.log(categories)
    const categoriesModifies=[];
   console.log(categories)
    for (const category of categories) {
      console.log(category)
      categoriesModifies.push(category.categoryName)
      try {
        const existingCategory = await Category.findOne({ categoryName: category.categoryName });

        if (existingCategory) {
          existingCategory.postCount += 1;
          await existingCategory.save();
        } else {
          const newCategory = new Category({ categoryName: category.categoryName });
          await newCategory.save();
        }
      } catch (error) {
        console.error(`Error processing category: ${category}`, error);
      }
    }
    postDetails.categories=categoriesModifies;
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
