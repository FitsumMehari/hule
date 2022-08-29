const router = require('express').Router();
const md5 = require("md5")
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const User = require('../models/User');


//REGISTER USER
router.post('/register', async (req, res) => {
  if (!req.body.user_first_name || !req.body.passwrod || !req.body.user_email) {
    res.status(400).json("Please fill the required inputs!")
  } else {

    var agreeTermAndCondition = req.body.agreeTermAndCondition
    var password = req.body.passwrod
    var password2 = req.body.passwrod2
    var user_email = req.body.user_email
    var user_father_name = req.body.user_father_name
    var user_first_name = req.body.user_first_name
    var user_last_name = req.body.user_last_name
    var user_phone_number = req.body.user_phone_number

    // Check for password validations
    if (password !== password2) {
      req.status(401).json({ "message": "Passwords Do Not Match" });
    }

    const newUser = new User({
      agreeTermAndCondition: agreeTermAndCondition,
      password: md5(password),
      user_email: user_email,
      user_father_name: user_father_name,
      user_first_name: user_first_name,
      user_last_name: user_last_name,
      user_phone_number: user_phone_number
    })
    try {
      const savedUser = await newUser.save();
      res.status(201).json({ "message": "Successful!" });
      console.log(savedUser);
    } catch (error) {
      res.status(500).json(error)
    }
  }
})


//LOGIN
router.post('/login', async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.status(400).json("Please fill the required inputs!")
  } else {
    try {
      const user = await User.findOne({ user_email: req.body.username });

      // !user && res.status(401).json("Wrong Credientials!");
      if (!user) {
        return res.status(401).json("Wrong Credientials!");
      }

      // userPassword !== req.body.password && res.status(401).json("Wrong Credientials!");
      if (user.password !== md5(req.body.password)) {
        return res.status(401).json("Wrong Credientials!");
      }

      const accessToken = jwt.sign({
        id: user._id, isAdmin: user.isAdmin,
      }, process.env.JWTSecretKey,
        { expiresIn: '7d' });

      const { password, ...others } = user._doc;

      res.status(200).json({ ...{ "message": "login successful" }, ...others, ...{ "accessToken": accessToken } });
    } catch (error) {
      res.status(500).json(error);
    }
  }
})

module.exports = router;
