const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render('blog');
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/sign-up', async (req, res) => {
  res.render('sign-up');
});

router.get('/post', async (req, res) => {
  res.render('post');
})


module.exports = router