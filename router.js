const router = require('express').Router();
const usersRouter = require('./users/routes.js');
const moviesRouter = require('./movies/routes.js');
const seriesRouter = require('./series/routes.js');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);

module.exports = router;