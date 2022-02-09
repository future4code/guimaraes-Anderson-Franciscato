import React from 'react';
import styled from 'styled-components'

const Botao = styled.div`
  margin-top: 20px;
  radius: 10px;
`
const Botao1 = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  radius: 10px;
`
function Botao2() {
    return (
      <Botao>
        <Botao1>
          {this.state.etapa !== 4 ? 'Próxima Etapa' : 'Voltar'}
        </Botao1>
      </Botao>
    );
  }
export default Botao2;