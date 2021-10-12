const mongoose = require("mongoose");


const db="mongodb+srv://ashish:parmar@cluster0.iqdem.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db).then(()=>
{
    console.log("connection succesful");

}).catch((err)=>{
    console.log("no connection")
})