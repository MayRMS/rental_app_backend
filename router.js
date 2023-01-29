const router = require('express').Router();
const usersRouter = require('./users/routes.js');
const moviesRouter = require('./movies/routes.js');
const seriesRouter = require('./series/routes.js');
const rentRouter = require('./rental/routes.js');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);
router.use('/rent', rentRouter);

module.exports = router;