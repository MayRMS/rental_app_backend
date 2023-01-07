const router = require('express').Router();
const controller = require('./controller.js');
const { getJWT } = require('../middleware/auth.js')

router.get('/toprated', getJWT, async (req, res) => {
    try {
        const series = await controller.getTopRated()
        res.status(200).json({series})
    } catch (err) {
        console.error(err)
        err.httpCode && res.status(err.httpCode).json(err)
        res.status(500).json({message: 'internal server error'})
    }
})

router.get('/:id', getJWT, async (req, res) => {
    const { id } = req.params
    try {
        const serie = await controller.getSerieById(id)
        res.status(200).json({serie})
    } catch (err) {
        console.error(err)
        err.httpCode && res.status(err.httpCode).json(err)
        res.status(500).json({message: 'internal server error'})
    }
})

router.get('/name/:name', getJWT, async (req, res) => {
    const { name } = req.params
    try {
        const serie = await controller.getSerieByName(name)
        res.status(200).json({serie})
    } catch (err) {
        console.error(err)
        err.httpCode && res.status(err.httpCode).json(err)
        res.status(500).json({message: 'internal server error'})
    }
})

router.get('/comingsoon/thisweek', getJWT, async (req, res) => {
    try {
        const series = await controller.getNextSevenDays()
        res.status(200).json({series})
    } catch (err) {
        console.error(err)
        err.httpCode && res.status(err.httpCode).json(err)
        res.status(500).json({message: 'internal server error'})
    }
})

router.get('/screened/cinema', getJWT, async (req, res) => {
    const { name } = req.params
    try {
        const series = await controller.getScreened(name)
        res.status(200).json({series})
    } catch (err) {
        console.error(err)
        err.httpCode && res.status(err.httpCode).json(err)
        res.status(500).json({message: 'internal server error'})
    }
})


module.exports = router