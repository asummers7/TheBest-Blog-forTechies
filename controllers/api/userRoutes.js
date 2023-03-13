const router = require('express').Router();
const User = require('../../models/User');
const { route } = require('../homeRoutes');

router.post('/', async (req, res) => {
    try { 
      const userData = await User.create({
      username: req.body.username,
      email: req.body.userEmail,
      password: req.body.userPassword,
    });
    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
  });

router.put("/:id")


module.exports = router