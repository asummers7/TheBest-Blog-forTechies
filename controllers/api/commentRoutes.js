const router = require('express').Router();

router.post("/", async (req, res) => {
    res.sendFile("comments");
});

module.exports = router