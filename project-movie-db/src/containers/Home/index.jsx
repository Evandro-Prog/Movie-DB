import api from '../../services/api'
import { Background, Info, Poster, Container, ContainerButtons } from './styles'
import { useState, useEffect } from 'react'
import Button from '../../components/Button/index'
import Slider from '../../components/Slider'
import { getImages } from '../../utils/get-images'



function Home() {

    const [movies, setMovies] = useState() 
    const [topMovies, setTopMovies] = useState() 
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [popularActors, setPopularActors] = useState()
    // O useState é um hook do React que permite adicionar o estado a um componente funcional. Ele é chamado sempre que o componente é renderizado, ou seja, sempre que o estado do componente muda.
    // Sempre que quermos mostrar algo na tela usamos o useState, que é um hook do React que permite adicionar o estado a um componente funcional.
    // O useState é uma função que retorna um array com dois elementos: o estado atual e uma função para atualizá-lo.


    useEffect(() => {
        // O useEffect é um hook do React que permite executar efeitos colaterais em componentes funcionais. Ele é chamado após a renderização do componente e pode ser usado para fazer chamadas de API, manipular o DOM, entre outros.
        // O useEffect é chamado sempre que o componente é renderizado, ou seja, sempre que o estado do componente muda.
        // O primeiro parâmetro é uma função que será executada após a renderização do componente. 
        // O segundo parâmetro é um array de dependências que indica quando o efeito deve ser executado novamente. Se o array estiver vazio, o efeito será executado apenas uma vez, após a primeira renderização do componente.
       

        async function getMovies() {
            const { data: { results }
            } = await api.get('/movie/popular')

            setMovies(results[0])  // O setMovies é uma função que atualiza o estado do componente. 
        }

        async function getTopMovies() {
            const { data: { results }
            } = await api.get('/movie/top_rated')

            setTopMovies(results)  // O setopMovies é uma função que atualiza o estado do componente. 
        }

        async function getTopSeries() {
            const { data: { results }
            } = await api.get('/tv/top_rated')

            setTopSeries(results)  // O setopSeries é uma função que atualiza o estado do componente. 
        }

        async function getPopularSeries() {
            const { data: { results }
            } = await api.get('/tv/popular')

            setPopularSeries(results)  // O setopSeries é uma função que atualiza o estado do componente. 
        }

        async function getPopularActors() {
            const { data: { results }
            } = await api.get('/person/popular')

            setPopularActors(results)  // O setopSeries é uma função que atualiza o estado do componente. 
        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getPopularActors()
    }, [])


    return (
        <>
            {movies && ( // O && é um operador lógico que retorna o segundo operando se o primeiro for verdadeiro.

                <Background img={getImages(movies.backdrop_path)}>
                    <Container>
                        <Info>
                            <h1>{movies.title}</h1>
                            <p>{movies.overview}</p>
                            <ContainerButtons>
                               <Button red >Assista Agora</Button> 
                               <Button>Assista o Trailer</Button> 
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movies.poster_path)} alt='movie-poster' />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies &&  <Slider info={topMovies} title={'Melhores Filmes'}/>}
            {topSeries &&  <Slider info={topSeries} title={'Melhores Séries'}/>}
            {popularSeries &&  <Slider info={popularSeries} title={'Séries Populares'}/>}
            {popularActors &&  <Slider info={popularActors} title={'Top Atores'}/>}
        </>
    )
}

export default Home

//Eslint e Pretier servem para formatar o código e deixar mais legível,
//o Eslint verifica se o código está correto e o Prettier formata o código de acordo com as regras definidas no arquivo .eslintrc.js e .prettierrc.js respectivamente.
//O Prettier é um formatador de código que pode ser usado com várias linguagens de programação, incluindo JavaScript, TypeScript, HTML, CSS e JSON.
// O Eslint é uma ferramenta de linting para JavaScript que ajuda a encontrar e corrigir problemas no código. Ambos são ferramentas muito úteis para manter o código limpo e legível.