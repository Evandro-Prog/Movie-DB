import { Background, Info, Poster, Container } from './styles'
import { useState, useEffect } from 'react'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/getImages'
import {getTopSeries, getPopularSeries, getSeries } from '../../services/getData'





function Series() {

    
    const [series, setSeries] = useState()    
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    
    
    

    useEffect(() => {
       

        async function getAllData() {
            
           Promise.all([
                getSeries(),                
                getTopSeries(),
                getPopularSeries(),
               
            ]).then(([series, topSeries, popularSeries]) => {

                setSeries(series)               
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                
            }).catch((error) => console.error(error))
            
        }

        getAllData()

    }, [])

        return (
            <>
                {series && ( // O && é um operador lógico que retorna o segundo operando se o primeiro for verdadeiro.

                    <Background img={getImages(series.backdrop_path)}>                        
                        <Container>
                            <Info>
                                <h1>{series.title}</h1>
                                <p>{series.overview}</p>                               
                            </Info>
                            <Poster>
                                <img src={getImages(series.poster_path)} alt='movie-poster' />
                            </Poster>
                        </Container>
                    </Background>
                )}
                
                {topSeries && <Slider info={topSeries} title={'Melhores Séries'} />}
                {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
                
            </>
        )
    }


export default Series