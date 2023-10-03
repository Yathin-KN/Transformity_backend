const {setUser}=require("./User/createUser")
const { signinUser }=require("./User/loginUser")
const {show}=require("./User/show")
const {addPost}=require("./Posts/addPost")
const {getAllPosts}=require("./Posts/getAllPosts")
const {getPostById}=require("./Posts/getPostByPostId")
var apis={
  setUser:setUser,
  signinUser:signinUser,
  show:show,

  //posts
  addPost:addPost,
  getAllPosts:getAllPosts,
  getPostById:getPostById
}

module.exports = apis;