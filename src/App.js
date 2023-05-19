const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const mongoUrl = "";

mongoose
.connect(mongoUrl,{
  userNewUrlParser: true,
})
.then(()=>{
  console.log("Connected to database");
})
.catch((e) => console.log(e));

required("./userDetails");

const User=mongoose.model("UserInfo");

app.post("/Registration", async(req,res)=>{
  const{Name, LicenseN, Position, FirearmSerialNumber, Email, Password, RePassword} = req.body;
  try{
    await User.create({
      Name, 
      LicenseN, 
      Position, 
      FirearmSerialNumber, 
      Email, 
      Password, 
      RePassword
    })
    res.send({status:"Ok"})
  }catch(error){
res.send({status:"Error"})
  }
});

app.listen(5000,()=>{
  console.log("Server Started");
});