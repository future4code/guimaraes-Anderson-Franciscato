import React from 'react';
/* import './CardPequeno.css' */
import styled from 'styled-components'

const LittleContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 100px;
}
`;
const LittleContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;
const LittleTitle = styled.h4`
    margin-bottom: 15px;
`;
const LittleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardPequeno(props) {
    return (
        <LittleContainer>
            <LittleContainerImg src={ props.imagem } />
            <LittleDiv>
                <LittleTitle>{ props.nome }</LittleTitle>
                <p>{ props.descricao }</p>
            </LittleDiv>
        </LittleContainer>
    )
}

export default CardPequeno;