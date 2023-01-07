const { customError } = require('../common/errors.js')
const { makeAxiosRequest } = require('../common/makeRequest.js')
const { movieURL } = require('../common/urls.js')

exports.getTopRated = async () => {
    const url = movieURL.topRated
    const trendingMovies = await makeAxiosRequest(url)
    return trendingMovies.data
}

exports.getMovieById = async (id) => {
    const url = movieURL.byId(id)
    const movie = await makeAxiosRequest(url)
    if (!movie.data) throw customError('movie not found', 404)
    return movie.data
}

exports.getMovieByName = async (name) => {
    const url = movieURL.byName(name)
    const movies = await makeAxiosRequest(url)
    const movie = movies.data.results.find(e => e.title.toLowerCase() === name.toLowerCase())
    if (!movie) throw customError('movie not found', 404)
    return movie
}

exports.getMovieByGenre = async (genreName) => {
    const genreList = await makeAxiosRequest(movieURL.listGenres)
    const genre = genreList.data.genres.find(e => e.name.toLowerCase() === genreName.toLowerCase())
    if (!genre) throw customError('genre not found', 404)
    const url = movieURL.byGenre(genre.id)
    const movies = await makeAxiosRequest(url)
    return movies.data
}
