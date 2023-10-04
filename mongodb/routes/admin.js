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

module.exports = router;