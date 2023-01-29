const router = require('express').Router()
const controller = require('./controller.js')
const { manageError } = require('../common/errors.js')
const { getJWT } = require('../middleware/auth.js')
const { isAdmin } = require('../middleware/isAdmin')


router.get('/', getJWT , isAdmin, async (req, res) => {
    try {
        const users = await controller.getAllUsers()
        res.status(200).json({ users })
    } catch (err) {
        manageError(err, res)
    }
})
router.get('/:id', getJWT, isAdmin, async (req, res) => {
    const { id } = req.params
    try {
        const user = await controller.getUserById(id)
        res.json(user)
    } catch (err) {
        manageError(err, res)
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    console.log({email, password})
    if (!email || !password) res.status(400).json({ message: 'bad request'})
    try {
        const token = await controller.login(email, password)
        res.status(200).json({ token })
    } catch (err) {
        manageError(err, res)
    }
});

router.post("/signup", async (req, res) => {
    const user = req.body
    if (!user.name || !user.email || !user.password || !user.age) {
        console.log(req.body)
        return res.status(400).json({ message: 'bad request'})
    }
    try {
        const token = await controller.signUp(user)
        console.log({token})
        return res.status(200).send({token})
    } catch (err) {
        manageError(err, res)
    }
});

module.exports = router