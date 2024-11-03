const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: String,
  role: String,
  email: String,
  phoneNumber: Number,
  course: String,
  status: String,
},{
    timestamps:true
});

module.exports=mongoose.model("users",user)
