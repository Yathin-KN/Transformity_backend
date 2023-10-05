const Category= require("../../schemas/category"); 

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find(); 
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  getAllCategories,
};
