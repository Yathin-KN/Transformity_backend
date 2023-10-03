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

module.exports = router;