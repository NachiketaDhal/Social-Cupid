require('dotenv').config();
const router = require('express').Router();
const Formidable = require('formidable');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

const User = require('../Model/User');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post('/register', (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, async (error, fields, files) => {
    const { username, password, verifiedPasseord } = fields;
    const { profileImg } = files;

    if (!username || !password || !verifiedPasseord || !profileImg) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      res
        .status(400)
        .json({ msg: 'User already exists, please login instead' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    cloudinary.uploader.upload(
      profileImg.path,
      {
        folder: 'Social-Cupid/profileImg',
      },
      async (error, res) => {
        if (error) return console.log(error);
        const profileImgURL = res.secure_url;
        const newUser = User.save({
          username,
          password: hashedPassword,
          profile_pic: profileImgURL,
        });
        const savedUser = await newUser.save();

        const token = await jwt.sign(
          { id: savedUser._id },
          process.env.JWT_SECRET
        );
        return res
          .status(201)
          .json({ token, profile_pic: savedUser.profile_pic });
      }
    );
  });
});

router.post('/login', (req, res) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, async (error, fields, files) => {
    const { username, password } = fields;

    if (!username || !password) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res
        .status(400)
        .json({ msg: "User doesn't exist, please register" });
    }

    const validatedPassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!validatedPassword) {
      return res.status(400).json({ msg: 'Invalid Credentials!' });
    }

    const token = await jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token, profile_pic: savedUser.profile_pic });
  });
});

module.exports = router;
