const express = require("express");
const router = express.Router();
const apis = require("../controllers/api");
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });
const verifyToken = require("../middleware/verifyToken");
router.post("/createUser", upload.single("profilePic"), (req, res) => {
  apis.setUser(req, res);
});

router.post("/signin", (req, res) => {
  apis.signinUser(req, res);
});

router.get("/show", verifyToken, (req, res) => {
  apis.show(req, res);
});

router.post("/addPost", (req, res) => {
  apis.addPost(req, res);
});

router.get("/getAllPosts",(req,res)=>{
  apis.getAllPosts(req,res);
})

router.get("/post/:post_id",(req,res)=>{
  apis.getPostById(req,res);
})

router.get("/event/:eventId",(req,res)=>{
  apis.getEventById(req,res)
})

router.get("/getAllPodcasts",(req,res)=>{
  apis.getAllPodcasts(req,res)
})

router.get("/getAllCategories",(req,res)=>{
  apis.getAllCategories(req,res);
})

router.get("/getAllEvents",(req,res)=>{
  apis.getAllEvents(req,res);
})

module.exports = router;
