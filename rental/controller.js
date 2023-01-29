const Rent = require('./model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.newRent = async (idSerie, idUser) => {
    const date = new Date()
    const returnDate = new Date()
    returnDate.setDate(date.getDate() + 7);
    const rent = await Rent.create({
        idSerie,
        idUser,
        rentDate: date,
        returnDate
    })
    return rent
}

exports.getRentById = async (id) => {
    const rent = await Rent.findById(id)
    return rent
}

exports.getRentsByUserId = async (idUser) => {
    const rents = await Rent.find({idUser})
    console.log(rents)
    return rents
}

exports.getAllRents = async () => {
    const rents = await Rent.find()
    return rents    
}