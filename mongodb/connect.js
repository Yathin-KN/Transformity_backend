const mongoose=require('mongoose')
let gfs;
const connect_DB=()=>{
    const url="mongodb+srv://yathin2184:LJF82omecf4fjqAb@cluster0.nmnnwk3.mongodb.net/"
    mongoose.set("strictQuery", true);
    mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
}

module.exports=connect_DB;