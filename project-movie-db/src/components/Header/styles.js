import styled from 'styled-components'

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background-color: ${props => 
        props.changeBackground ? '#000000' : 'transparent'}; //Muda a cor de fundo quando o scroll é maior que 0
    transition: background-color 1s ease-in-out; // Transição suave para a mudança de cor
    
    img {
        width: 30%
    }
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;      
`

export const Li = styled.li` 
    font-weight: 600;
    cursor: pointer;
    font-size: 28px;
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;        
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : '0'}; // Default width is 0 if not active 
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%); // Center the line
        transition: width 0.6s ease-in-out; // Smooth transition
    }

    &:hover::after {
        width: 100%; // Show the line on hover
    }
`

