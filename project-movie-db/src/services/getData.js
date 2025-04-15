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

// Busca Filme ou Série pelo ID
export async function getMovie(movieId) {
    const { data: { results } } = 
    await api.get(`/movie/${movieId}/videos`)

    return results[0]
    }