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
const Input2 = styled.input`
    height: 2rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
`


function Etapa2() {
    return (
        <MainContainer>
            <h1> INFORMAÇÕES SOBRE ENSINO</h1>
                <div className="Curso">
                <Textos>1. Qual o curso que você estuda/estudou?</Textos>
                <Input type="text" placeholder="Digite o curso" />
                </div>
                <div className="Instituicao">
                <Textos>2. Qual a instituição de ensino?</Textos>
                <Input2 type="text" placeholder="Digite a instituição" />
                </div>
                <div className="Ano">
                <Textos>3. Qual o ano de conclusão?</Textos>
                <Input2 type="text" placeholder="Digite o ano" />
                </div>
        </MainContainer>
    );
}
export default Etapa2;