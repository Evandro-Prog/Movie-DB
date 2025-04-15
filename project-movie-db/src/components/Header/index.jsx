import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Container, Menu, Li } from './styles'
import { Link, useLocation } from 'react-router-dom'



function Header() {

    const [changeBackground, setChangeBackground] = useState(false) // Estado para mudar o background do header
    const { pathname } = useLocation() //Pega o caminho da URL atual

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) { // Se o scroll for maior que 150px
            setChangeBackground(true) // Muda o estado para true
        }

        if (changeBackground && window.pageYOffset <= 150) { // Se o scroll for menor que 150px
            setChangeBackground(false) // Muda o estado para false
        }
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo-movie-flix" />
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/" >Home</Link>
                </Li>
                <Li isActive={pathname.includes ('movies')}>
                    <Link to="/movies" >Filmes</Link>
                </Li>
                <Li isActive={pathname.includes ('series')}>
                    <Link to="/series" >Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header;