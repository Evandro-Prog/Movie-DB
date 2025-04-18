import styled from 'styled-components'

export const Title = styled.h4`
    color: #ffffff;
    font-size: 28px;
    font-weight: 700;
`

export const Container = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 30px;    
    padding-bottom: 10px;    
    
    div {
        
        display: flex;
        flex-direction: column;

        img {
            height: 200px;            
            border-radius: 5px;
        }

        p {
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            margin-top: 5px;
        }
    }
`