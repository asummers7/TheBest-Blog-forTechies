const router = require("express").Router();
const {Comment, User} = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const mappedComments = comments.map((comment) =>
      comment.get({ plain: true })
    );
    res.render('blog', { comments:mappedComments,
      login: req.session.login,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.login = true;
      req.session.userId = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/sign-up', async (req, res) => {
  res.render('sign-up');
});

router.get('/post', withAuth, async (req, res) => {
  res.render('post');
});

router.post('/logout', (req, res) => {
  if (req.session.login) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router