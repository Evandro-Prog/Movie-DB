import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getMovieById, getMovieCredits, getMovieSimilar, getAllMovieVideos } from '../../services/getData'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'
import { getImages } from '../../utils/getImages'
import SpanGenres from '../../components/SpanGenres'
import Credits from '../../components/Credits'
import Slider from '../../components/Slider'



function Detail() {

    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {


        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getAllMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id),

            ]).then(([movie, videos, credits, similar]) => {

                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)

            }).catch((error) => console.error(error))

        }

        getAllData()

    }, [])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt={movie.title} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                        <div>Detalhes</div>
                    </Container>
                    <ContainerMovies>
                        {movieVideos
                            && movieVideos.map((video) => (
                                <div key={video.id}>
                                    <h4>{video.name}</h4>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video?.key}`}
                                        title="YouTube video player"
                                        height="500"
                                        width="100%"
                                    ></iframe>
                                </div>
                            ))}
                    </ContainerMovies>

                    {movieSimilar && <Slider info={movieSimilar} title={'Recomendados'} />}

                </>
            )}
        </>
    )
}



export default Detail