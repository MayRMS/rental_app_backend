const router = require('express').Router()
const controller = require('./controller.js')
const { manageError } = require('../common/errors.js')
const { getJWT } = require('../middleware/auth.js')
const { isAdmin } = require('../middleware/isAdmin')


router.post("/newrental", async (req, res) => {
    const {serie, user} = req.body
    if (!serie || !user) {
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const rent = await controller.newRent(serie,user)
        return res.status(200).json({rent})
    } catch (error) {
        return res.status(500).json({ message: 'internal server error'})
    }
});

router.get("/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const rent = await controller.getRentById(id)
        return res.status(200).json({ rent })
    } catch (err) {
        manageError(err, res)
    }
});

router.get("/user/:idUser", async (req, res) =>{
    const {idUser} = req.params
    try {
        const userRents = await controller.getRentsByUserId(idUser)
        return res.status(200).json(userRents)
    } catch (err) {
        manageError(err, res)
    }
});

router.get("/", async (req,res) => {
    try {
        const allRents = await controller.getAllRents()
        return res.status(200).json({ allRents })
    } catch (err) {
        manageError(err, res)
    }
})




module.exports = router