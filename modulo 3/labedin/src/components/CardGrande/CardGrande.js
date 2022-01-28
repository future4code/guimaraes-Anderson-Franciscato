import React from 'react';
/* import './CardGrande.css' */
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;
const BigContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;
const BigTitle = styled.h4`
    margin-bottom: 15px;
`;
const BigDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <BigContainer>
            <BigContainerImg src={ props.imagem } />
            <BigDiv>
                <BigTitle>{ props.nome }</BigTitle>
                <p>{ props.descricao }</p>
            </BigDiv>
        </BigContainer>
    )
}

export default CardGrande;