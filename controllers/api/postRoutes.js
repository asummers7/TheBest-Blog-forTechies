const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {Comment} = require('../../models')

router.post("/", withAuth, async (req, res) => {
    const comments = await Comment.create({...req.body, user_id: req.session.userId})
    res.status(200).json(comments);
});

module.exports = router