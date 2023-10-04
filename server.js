var express = require('express')
var cors = require('cors')
const mongoose=require('mongoose')
const multer  = require('multer')
const clientRoutes = require('./mongodb/routes/client');
const adminRoutes=require('./mongodb/routes/admin')
const ConnectToDb = require("./mongodb/connect");
ConnectToDb();
var app = express()
 
app.use(cors())
app.use(express.json())
 
app.use('/api/client', clientRoutes);
app.use('/api/admin', adminRoutes);

const port=2000;

app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})