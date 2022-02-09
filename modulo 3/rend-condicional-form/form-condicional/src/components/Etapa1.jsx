import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Textos = styled.p`
    font-size: 1rem;
    font-weight: bold;
    justify-content: center;
    flex-direction: column;
    align-items: center;
` 
const Input = styled.input`
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 2rem;
    margin-right: 1rem;
    margin-left: 2.5rem;
`
const Selecione = styled.select`
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 2rem;
    margin-right: 1rem;
    margin-left: 3rem;
`


function etapa1 () {
    return (
        <MainContainer>
            <h1> DADOS GERAIS</h1>
            <div className="nome">
                <Textos>1. Qual seu nome?</Textos>
                <Input type="text" placeholder="Digite seu nome" />
            </div>
            <div className="idade">
                <Textos>2. Qual sua idade?</Textos>
                <Input type="text" placeholder="Digite sua idade" />
            </div>
            <div className="email">
                <Textos>3. Qual seu email?</Textos>
                <Input type="text" placeholder="Digite seu email" />
            </div>
            <div className="escolaridade">
                <Textos>4. Qual sua escolaridade?</Textos>
                <Selecione>
                    <option value="">Selecione</option>
                    <option value="1">Ensino Fundamental</option>
                    <option value="2">Ensino Fundamental incompleto</option>
                    <option value="3">Ensino Médio</option>
                    <option value="4">Ensino Médio incompleto</option>
                    <option value="5">Ensino Superior</option>
                    <option value="6">Ensino Superior incompleto</option>
                </Selecione>
            </div>
        </MainContainer>
    );
}
export default etapa1;