const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
    
    try {
        const { name, email, password, cfpassword } = req.body;
        console.log(req.body);

        //validation
        if (!name || !email || !password || !cfpassword)
            return res.status(400).json({ errorMessage: "please ENter All the fields" });
        
        if (password.length < 6)
            return res.status(400).json({ errorMessage: "Please Enter >6" });
        
        if (password !== cfpassword)
            return res.status(400).json({ errorMessage: "both must be same" });
        
        const existingUser = await User.findOne({ email });
         if (existingUser)
           return res.status(400).json({ errorMessage: "Already exist" });

           // hash password
           const salt = await bcrypt.genSalt();
           const passwordHash = await bcrypt.hash(password, salt);

           //save a new user account to the database
           const newUser = new User({
            email, passwordHash
           });

           const savedUser = await newUser.save();

           //log the user in 
        const token = jwt.sign(
            {
                user :savedUser._id,
            },
            process.env.JWT_SECRET
        );

        //send the cookie in HTTP-only cookie
        res.cookie("token", token, {httpOnly:true,}).send();
    }
    catch (err) {
        console.error(err);
        res.status(500).send();
    }
    
})

router.post("/login", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password)
            return res
                .status(400)
                .json({ errorMessage: "please ENter All the fields" });
        
        const existingUser = await User.findOne({ email });
        if (!existingUser)
             return res
               .status(401)
                .json({ errorMessage: "Wrong Email Or password" });
        
        const passwordCorrect = await bcrypt.compare(
            password, existingUser.passwordHash
        );
        if (!passwordCorrect)
            return res
              .status(400)
              .json({ errorMessage: "Password is incorrect" });

                
    }
    catch (error) {
        console.error(error);
    }
});

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    }).send();
})

module.exports = router;