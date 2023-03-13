const router = require('express').Router();
// const userRoutes = require('./api/userRoutes');
// const commentRoutes = require('./api/commentRoutes');
const homeRoutes = require('./homeRoutes');
router.use('/',homeRoutes,);
// router.use('/api/users', userRoutes)
// router.use('/api/comments', commentRoutes)

module.exports = router