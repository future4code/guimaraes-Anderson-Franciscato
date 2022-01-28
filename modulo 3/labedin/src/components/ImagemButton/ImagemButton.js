import React from 'react';
/* import './ImagemButton.css'; */
import styled from 'styled-components'

const ButtonContainer = styled.h2`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    flex-direction: row;
`;
const ButtonImg = styled.img`
    width: 30px;
    height: 30px;
    flex-direction: row;
    display: flex;
    padding: 10px;
`;
const ButtonImgL = styled.a`
    flex-direction: row;
    display: flex;
`;
const ButtonP = styled.p`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    padding-left: 20px;
    padding-top: -50px;
`;

function ImagemButton(props) {
    return (
        <ButtonContainer>
            <ButtonImgL href={props.href}>
            <ButtonImg src={ props.imagem }/>
            <ButtonP>{ props.texto } </ButtonP>
            </ButtonImgL>
        </ButtonContainer>

    )
}

export default ImagemButton;