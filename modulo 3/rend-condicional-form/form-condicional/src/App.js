import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
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

export default class App extends React.Component {
  state = {
    etapa: 1,
    }
    render() {
      function renderizarEtapa () {
        switch (this.state.etapa) {
          case 1:
          return <Etapa1 />
          case 2:
          return <Etapa2 />
          case 3:
          return <Etapa3 />
          case 4:
          return <Final />
          }
        }
      function proximaEtapa () {
        this.setState({
          etapa: this.state.etapa + 1
        })
      }
      let pagina = renderizarEtapa.call(this)
      return (
        <MainContainer>
          <h1>ETAPA {this.state.etapa}</h1>
          {pagina}

          <Botao>
          <Botao1 onClick={proximaEtapa.bind(this)}>Próxima Etapa</Botao1>
          </Botao>
        </MainContainer>
        
      )
    }
}
