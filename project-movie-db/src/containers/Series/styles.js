import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from{
        transform: scale(0);
    }
    to{
        transform: scale(1);
    }

`

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }

    &::after {
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    display: flex;    
    justify-content: space-around;
    align-items: center;
    max-width: 1500px;
    height: 100%;
    position: relative;
    margin-top: 100px;

    @media (max-width: 900px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 90%;
    }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 4rem;
        font-weight: 700;
        color: #ffffff;
    }

    p{
        font-size: 20px;
        font-weight: 400;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;

    img {
        width: 350px;
        border-radius: 30px;
        animation: ${scale} 0.7s linear;
    }
`



