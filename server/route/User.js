const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const authenticate =require("../middleware/authenticate")



router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    
    return res.status(422).json({ error: "Fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, password });

    const salt = await bcrypt.genSalt(12)
    user.password = await bcrypt.hash(password,salt);

    const userRegsiter = await user.save();
    if (userRegsiter) {
      res.status(201).json({ message: "User registered Successful" });
    } else {
      res.status(422).json({ error: "Registraion Failed" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/Login", async (req, res) => {

  let token;
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(420).json({ error: "Please fill the Details" });
    }

    const userLogin = await User.findOne({ email: email });

 
 

    if(userLogin){
      const isMatch = await bcrypt.compare(password,userLogin.password);

      token = await userLogin.generateAuthToken();

      

      if (!isMatch) {
        res.status(400).json({ error: "enter correct credentials password" });} 
      else{
        res.json({ message: "user login successfully", token});}
    }else{

      res.status(400).json({ error: "enter correct credentials" });
    }
                    
  } 
  
  catch (err) {
    console.log(err);
  }
});

router.get("/about",authenticate,(req,res)=> {
  console.log("Hello from the aboutsidde")
  res.send("hello from the about side");
} );

router.get("/logout",(req,res)=> {

  res.clearCookie("jwtoken",{path:"/"})
  res.status(200).send("User Logout");
} );


module.exports = router;
