import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
      postaram: [
        {
          fotoUsuario:'https://picsum.photos/50/50',
          nomeUsuario: 'Paulinha',
          fotoPost:'https://picsum.photos/200/150',
        },
        {
          fotoUsuario: 'https://www.smashbros.com/wiiu-3ds/sp/images/character/link/main.png',
          nomeUsuario: 'Link',
          fotoPost: 'https://t.ctcdn.com.br/sKGksv6qVGHsje9r-rugGrlg4fA=/1024x0/smart/i372686.jpeg',
        },
        {
          fotoUsuario: 'https://cdn.awsli.com.br/600x700/1610/1610163/produto/62282870/poster-donkey-kong-i-efc75817.jpg',
          nomeUsuario: 'DK',
          fotoPost: 'https://t.ctcdn.com.br/Q1f6EvQOXACtw9rGjVVk4y24ZD4=/i372690.jpeg'
        }
      ]
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({ 
      curtido: !this.state.curtido,
    numeroCurtidas: this.state.numeroCurtidas + 1
    })
    if (this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }
 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {

    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }
    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post