const User = require('./model.js')
const { customError } = require('../common/errors.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.getAllUsers = async () => {
    const users = await User.find()
    if (!users.length) throw customError('patatas no esiten', 401)
    return users
}

exports.getUserById = async (id) => {
    const user = await User.findById(id)
    if (!user) throw customError('user not found', 404)
    return user
}

exports.login = async (email, password) => {
    const user = (await User.find({ email }))[0]
    if (!user) throw customError('user not found', 404)
    if (!bcrypt.compareSync(password, user.password)) throw customError('user not found', 404)

    return generateToken(user)
}

exports.signUp = async (user) => {
    const password = bcrypt.hashSync(user.password, Number(process.env.ROUNDS));
    //user.password = password
    const newUser = await User.create({...user, password})
    
    return generateToken(newUser)
}

const generateToken = (user) => {
    return jwt.sign({ user }, process.env.SECRET, { expiresIn: process.env.EXPIRES })
} 