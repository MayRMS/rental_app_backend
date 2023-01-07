
const customError = (message, httpCode) => ({
    message,
    httpCode
})

const manageError = (err, res) => {
    console.log(err)
    err.httpCode && res.status(err.httpCode).json(err)
    res.status(500).json({message: 'internal server error'})
}

module.exports = {
    customError,
    manageError
}