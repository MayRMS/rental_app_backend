const axios = require('axios')

const makeAxiosRequest = async (url) => {
    try {
        const res = await axios.get(url)
        return res
    } catch (e) {
        console.log(e)
        throw customError('servicio no disponible', 503)
    }
}

module.exports = {
    makeAxiosRequest: makeAxiosRequest
}
