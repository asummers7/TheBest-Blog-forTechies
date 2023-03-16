const router = require('express').Router();
const withAuth = require('../../utils/auth')

router.post("/", withAuth, async (req, res) => {
    res.render("comments");//create a handlebar page for comments and replies
});

module.exports = router