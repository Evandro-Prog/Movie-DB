import { useState, useEffect } from "react"
import Slider from '../../components/Slider'
import { Background, ContainerSlider } from './styles'
import { getTopMovies, getUpcomingMovies, getNowPlayingMovies } from '../../services/getData'


function Movies() {
    
    const [topMovies, setTopMovies] = useState()
    const [upcomingMovies, setUpcomingMovies] = useState()
    const [nowPlayingMovies, setNowPlayingMovies] = useState()

    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getUpcomingMovies(),
                getNowPlayingMovies(),
                getTopMovies()

            ]).then(([upcomingMovies, nowPlayingMovies, topMovies]) => {
                setUpcomingMovies(upcomingMovies)
                setNowPlayingMovies(nowPlayingMovies)
                setTopMovies(topMovies)

            }).catch((error) => console.error(error))

        }

        getAllData()

    }, [])

    return (

        <Background >           
            <ContainerSlider>
                {upcomingMovies && <Slider info={upcomingMovies} title={'Em Breve'} />}
                {nowPlayingMovies && <Slider info={nowPlayingMovies} title={'Agora nos cinemas'} />}
                {topMovies && <Slider info={topMovies} title={'Melhores Filmes'} />}
            </ContainerSlider>
        </Background>
    )
}

export default Movies