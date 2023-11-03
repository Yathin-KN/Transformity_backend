const {setUser}=require("./User/createUser")
const { signinUser }=require("./User/loginUser")
const {show}=require("./User/show")
const {addPost}=require("./Posts/addPost")
const {getAllPosts}=require("./Posts/getAllPosts")
const {getPostById}=require("./Posts/getPostByPostId")
const {getUrl}=require("./User/getBlogMedia")
const {postDeleteController}=require("./Posts/deletePost")
const {getAllCategories}=require("./Category/getAllCategories")
const {addEvent}=require("./Event/addEvent")
const {deleteEvent}=require("./Event/deleteEvent")
const {getAllEvents}=require("./Event/getAllEvents")
const {getEventById}=require("./Event/getEventById")
const {getAllPodcasts}=require("./Podcasts/getAllPodCasts")
const { createPodcast}=require("./Podcasts/createPodCasts")
const { deletePodCast }=require("./Podcasts/deletePodCasts")
const {addFeedback}=require("./feedback/addFeedBack");
var apis={
  setUser:setUser,
  signinUser:signinUser,
  show:show,

  //posts
  addPost:addPost,
  getAllPosts:getAllPosts,
  getPostById:getPostById,
  postDeleteController:postDeleteController,
  getAllCategories:getAllCategories,
  
  //getURl
  getUrl:getUrl,

  //Events
  addEvent:addEvent,
  deleteEvent:deleteEvent,
  getAllEvents:getAllEvents,
  getEventById:getEventById,

  //podcasts
  getAllPodcasts:getAllPodcasts,
  createPodcast:createPodcast,
  deletePodCast:deletePodCast,

  //feedback
  addFeedback:addFeedback,
}

module.exports = apis;