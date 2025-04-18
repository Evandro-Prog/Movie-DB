import { useEffect, useState } from "react"
import { Container, Background, Button } from "./styles"
import { getMovieVideos } from "../../services/getData"




function Modal({ movieId, setShowModal }) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
           setMovie(await getMovieVideos(movieId))
        }

        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            
            {movie && (                
                <Container>
                    <Button onClick={() => setShowModal(false)}>Fechar</Button>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie?.key}`}
                        title="YouTube video player"
                        height="500"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal