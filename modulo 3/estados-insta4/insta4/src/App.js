import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {

  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Link'}
          fotoUsuario={'https://www.smashbros.com/wiiu-3ds/sp/images/character/link/main.png'}
          fotoPost={'https://t.ctcdn.com.br/sKGksv6qVGHsje9r-rugGrlg4fA=/1024x0/smart/i372686.jpeg'}
        />
        <Post
          nomeUsuario={'DK'}
          fotoUsuario={'https://cdn.awsli.com.br/600x700/1610/1610163/produto/62282870/poster-donkey-kong-i-efc75817.jpg'}
          fotoPost={'https://t.ctcdn.com.br/Q1f6EvQOXACtw9rGjVVk4y24ZD4=/i372690.jpeg'}
        />
      </MainContainer>
    );
  }
}

export default App;
