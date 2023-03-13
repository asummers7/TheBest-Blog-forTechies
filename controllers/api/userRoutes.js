const router = require('express').Router();
const {User} = require('../../models');



router.post('/', async (req, res) => {
  try { 
    const userData = await User.create({
      username: req.body.username,
      email: req.body.userEmail,
      password: req.body.userPassword,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      
      res.status(200).json(dbUserData);
    });
    res.status(200).json(userData)
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get("/:id")


module.exports = router