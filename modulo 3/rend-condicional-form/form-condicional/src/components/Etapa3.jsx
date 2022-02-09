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



function etapa3() {
    return (
        <MainContainer>
           <h1> INFORMAÇÕES DE ENSINO</h1>
              <div className="terminar">
                  <Textos>5. Por que você não terminou a graduação?</Textos>
                    <Input type="text" placeholder="Digite o motivo" />
                </div>
                <div className="extra">
                    <Textos>6. Você fez algum curso complementar?</Textos>
                    <Selecione>
                        <option value="">Selecione</option>
                        <option value="1">Nenhum</option>
                        <option value="2">Curso técnico</option>
                        <option value="3">Curso de idiomas</option>
                        <option value="4">Outros</option>
                    </Selecione>
                    <Textos>Se outros especifique:</Textos>
                    <Input type="text" placeholder="Qual?" />
                    </div>
        </MainContainer>
    );
}
export default etapa3;