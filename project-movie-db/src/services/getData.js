import api from "./api"


// Busca Filme para exibir na home
export async function getMovies() {

    const { data: { results }
    } = await api.get('/movie/popular')

    return results[0]
}

// Busca Filmes Populares
export async function getTopMovies() {

    const { data: { results }
    } = await api.get('/movie/top_rated')
    
    return results
}

export async function getSeries() {
    const { data: { results }
    } = await api.get('/tv/top_rated')

    return results[2]
}


// Busca Séries
export async function getTopSeries() {

    const { data: { results }
    } = await api.get('/tv/top_rated')

    return results
}

// Busca Séries Populares
export async function getPopularSeries() {

    const { data: { results }
    } = await api.get('/tv/popular')

    return results
}

// Busca Atores Populares
export async function getPopularActors() {

    const { data: { results }
    } = await api.get('/person/popular')

    return results
}

export async function getUpcomingMovies() {
    const { data: { results } } = await api.get('/movie/upcoming')

    return results
}

export async function getNowPlayingMovies() {
    const { data: { results } } = await api.get('/movie/now_playing')

    return results
}

// Busca Filme ou Série pelo ID
export async function getMovieVideos(movieId) {
    const { data: { results } } =
        await api.get(`/movie/${movieId}/videos`)

    return results[0]
}

export async function getMovieCredits(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } =
        await api.get(`/movie/${movieId}/similar`)

    return results
}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}

export async function getAllMovieVideos(movieId) {
    const { data: { results } } =
        await api.get(`/movie/${movieId}/videos`)

    return results
}


