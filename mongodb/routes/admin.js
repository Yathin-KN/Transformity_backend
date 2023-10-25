const express = require("express");
const router = express.Router();
const apis = require("../controllers/api");
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });

router.post("/createUrl", upload.single("media"), (req, res) => {
    apis.getUrl(req,res)
});

router.post("/deletePost",(req,res)=>{
    apis.postDeleteController(req,res)
})

router.post("/addEvent",upload.single("photo"),(req,res)=>{
    apis.addEvent(req,res);
})

router.post("/createPodcast",(req,res)=>{
    apis.createPodcast(req,res);
})

router.delete("/deleteEvent/:eventId/:user_id",(req,res)=>{
    apis.deleteEvent(req,res);
})

router.delete("/deletePodcast/:podcastId",(req,res)=>{
    apis.deletePodCast(req,res)
})
module.exports = router;