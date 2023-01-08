const router = require('express').Router();
const controller = require('./controller.js')
const { getJWT } = require('../middleware/auth.js');
const { manageError } = require('../common/errors.js');

router.get('/toprated', getJWT, async (req, res) => {
    try {
        const movies = await controller.getTopRated()
        res.status(200).json({ movies })
    } catch (err) {
        manageError(err, res)
    }
})
router.get('/:id', getJWT, async (req, res) => {
    const { id } = req.params
    try {
        const movie = await controller.getMovieById(id)
        res.status(200).json({ movie })
    } catch (err) {
        manageError(err, res)
    }
})
router.get('/name/:name', getJWT, async (req, res) => {
    const { name } = req.params
    try {
        const movie = await controller.getMovieByName(name)
        res.status(200).json({ movie })
    } catch (err) {
        manageError(err, res)
    }
})
router.get('/genre/:genre', getJWT, async (req, res) => {
    const { genre } = req.params
    try {
        const movies = await controller.getMovieByGenre(genre)
        res.status(200).json({ movies })
    } catch (err) {
        manageError(err, res)
    }
})

module.exports = router