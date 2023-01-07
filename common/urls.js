
const movieURL = {
    topRated: `${process.env.MOVIE_DB_URL}/3/movie/top_rated?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`,
    byId: (id) => `${process.env.MOVIE_DB_URL}/3/movie/${id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`,
    byName: (name) => `${process.env.MOVIE_DB_URL}/3/search/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1&query=${name}`,
    listGenres: `${process.env.MOVIE_DB_URL}/3/genre/movie/list?api_key=${process.env.MOVIE_DB_API_KEY}`,
    byGenre: (id) => `${process.env.MOVIE_DB_URL}/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1&with_genres=${id}`
}
const serieURL = {
    topRated: `${process.env.MOVIE_DB_URL}/3/tv/top_rated?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`,
    byId: (id) => `${process.env.MOVIE_DB_URL}/3/tv/${id}?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`,
    byName: (name) => `${process.env.MOVIE_DB_URL}/3/search/tv?api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1&query=${name}`,
    nextSevenDays: (futureDate) =>`${process.env.MOVIE_DB_URL}/3/discover/tv?air_date.lte=${futureDate}&air_date.gte=${fmtTodayDate}&api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`,
    screened: (name) =>`${process.env.MOVIE_DB_URL}/3/discover/tv/?screened_theatrically=true${name}&api_key=${process.env.MOVIE_DB_API_KEY}&language=es-ES&page=1`
}

module.exports = {
    movieURL,
    serieURL
}