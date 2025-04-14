import { Container } from './styles'
import { getImages } from '../../utils/get-images'

function Card({ item }) {
    return (
        <Container>
            <img src={getImages(item.poster_path || item.profile_path || '')} alt='image' />
            <h3>{item.original_title || item.name}</h3>
        </Container>
    )
}



export default Card