const router = require('express').Router();
const controller = require('./controller.js');
const { getJWT } = require('../middleware/auth.js');
const { manageError } = require('../common/errors.js');

router.get('/toprated', getJWT, async (req, res) => {
    try {
        const series = await controller.getTopRated()
        res.status(200).json({ series })
    } catch (err) {
        manageError(err, res)
    }
})

router.get('/:id', getJWT, async (req, res) => {
    const { id } = req.params
    try {
        const serie = await controller.getSerieById(id)
        res.status(200).json({ serie })
    } catch (err) {
        manageError(err, res)
    }
})

router.get('/name/:name', getJWT, async (req, res) => {
    const { name } = req.params
    try {
        const serie = await controller.getSerieByName(name)
        res.status(200).json({ serie })
    } catch (err) {
        manageError(err, res)
    }
})

router.get('/comingsoon/thisweek', getJWT, async (req, res) => {
    try {
        const series = await controller.getNextSevenDays()
        res.status(200).json({ series })
    } catch (err) {
        manageError(err, res)
    }
})

router.get('/screened/cinema', getJWT, async (req, res) => {
    const { name } = req.params
    try {
        const series = await controller.getScreened(name)
        res.status(200).json({ series })
    } catch (err) {
        manageError(err, res)
    }
})


module.exports = router