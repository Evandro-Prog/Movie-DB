
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import Button from '../../components/Button/index'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import Modal from '../../components/Modal'
import { useNavigate } from 'react-router-dom'
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getPopularActors } from '../../services/getData'





function Home() {

    const [showModal, setShowModal] = useState(false)
    const [movies, setMovies] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularActors, setPopularActors] = useState()
    const navigate = useNavigate()
    

    useEffect(() => {
       

        async function getAllData() {
            
           Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getPopularActors()
            ]).then(([movies, topMovies, topSeries, popularSeries, popularActors]) => {
                setMovies(movies)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setPopularActors(popularActors)
            }).catch((error) => console.error(error))
            
        }

        getAllData()

    }, [])

        return (
            <>
                {movies && ( // O && é um operador lógico que retorna o segundo operando se o primeiro for verdadeiro.

                    <Background img={getImages(movies.backdrop_path)}>
                        {showModal && <Modal movieId={movies.id} setShowModal={setShowModal} />}
                        <Container>
                            <Info>
                                <h1>{movies.title}</h1>
                                <p>{movies.overview}</p>
                                <ContainerButtons>
                                    <Button red onClick={() => navigate(`/detalhe/${movies.id}`)}>Assista Agora</Button>
                                    <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                                </ContainerButtons>
                            </Info>
                            <Poster>
                                <img src={getImages(movies.poster_path)} alt='movie-poster' />
                            </Poster>
                        </Container>
                    </Background>
                )}
                {topMovies && <Slider info={topMovies} title={'Melhores Filmes'} />}
                {topSeries && <Slider info={topSeries} title={'Melhores Séries'} />}
                {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
                {popularActors && <Slider info={popularActors} title={'Top Atores'} />}
            </>
        )
    }


export default Home

