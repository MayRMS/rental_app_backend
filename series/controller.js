const axios = require('axios')
const { customError } = require('../common/errors.js')
const { makeAxiosRequest } = require('../common/makeRequest.js')
const { serieURL } = require('../common/urls.js')


exports.getTopRated = async () => {
    const url = serieURL.topRated
    const trendingSeries = await makeAxiosRequest(url)
    return trendingSeries.data
}

exports.getSerieById = async (id) => {
    const url = serieURL.byId(id)
    const serie = await makeAxiosRequest(url)
    if (!serie.data) throw customError('serie not found', 404)
    return serie.data
}

exports.getSerieByName = async (name) => {
    const url = serieURL.byName(name)
    const series = await makeAxiosRequest(url)
    //const serie = series.data.results.find(e => e.name.toLowerCase() === name.toLowerCase())
    //const serie=await series.data.results.find({"name":{ "$regex": url, "$options": "i" }})
    return series.data
}

exports.getNextSevenDays = async () => {
    const futureDate = getDateFromTheFuture(7)
    const fmtTodayDate = getDateFromTheFuture(0)
    const url = serieURL.nextSevenDays
    const serie = await makeAxiosRequest(url)
    if (!serie.data) throw customError('serie not found', 404)
    return serie.data
}

exports.getScreened = async (name) => {
    const url =  serieURL.screened(name)
    const serie = await makeAxiosRequest(url)
    if (!serie.data) throw customError('serie not found', 404)
    return serie.data
}

const getDateFromTheFuture = (howMuchFuture) => {
    const date = new Date()
    date.setDate(date.getDate() + howMuchFuture);
    const year = date.toLocaleString("default", { year: "numeric" })
    const month = date.toLocaleString("default", { month: "2-digit" })
    const day = date.toLocaleString("default", { day: "2-digit" })
    const fmtDate = `${year}-${month}-${day}`
    return fmtDate
}
