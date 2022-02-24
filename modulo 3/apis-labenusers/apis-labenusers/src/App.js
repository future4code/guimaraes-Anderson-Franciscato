import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import Cadastro from './components/cadastro.jsx';
import PaginaUser from './components/paginaUsers.jsx';
import style from 'styled-components';

const requestCadastro = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
        Authorization: 'anderson-franciscato-guimaraes' }
        })

const Button1 = style.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 30%;
    opacity: 0.9;
    align-items: center;
    justify-content: center;
    margin-left: 20%;
    border-radius: 10px;
    hover: {
        opacity: 1;
    }
`;
const Button2 = style.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 30%;
    opacity: 0.9;
    align-items: left;
    justify-content: left;
    margin-left: 10%;
    border-radius: 10px;
    hover: {
        opacity: 100;
    }
`;

export default class App extends React.Component {
  state = {
    usuarios: [],
    etapa: 1,
  }

  componentDidMount() {
    requestCadastro.then(response => {
      this.setState({
        usuarios: response.data
      })
      .catch(error => {
        console.log (error.message)
    })
  })
  }

  createCadastro() {
    const body = {
      name: this.state.nameImput,
      email: this.state.emailImput,
  }
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
          Authorization: 'anderson-franciscato-guimaraes'
      }
  })
  .then(response => {
      console.log(response.data)
      alert('Usuário cadastrado com sucesso')
      this.setState({ nameImput: '', emailImput: '' })
      this.getUserByld()
  })
  .catch(error => {
      console.log(error.message)
  })
  }
  onChangeinputUsuario(event) {
    this.setState({ nameImput: event.target.value })
  }
  onChangeinputEmail(event) {
    this.setState({ emailImput: event.target.value })
  }
  redirect(event) {
    event.preventDefault()
    this.props.history.push(PaginaUser)
  }
  renderizarPage() {
    switch (this.state.etapa) {
      case 1:
        return (
          <div>
            <Cadastro/></div>
        )
      case 2:
        return (
          <div>
            <PaginaUser/></div>
        )
      default:
        return (
          <div>
            <Cadastro/></div>
        )
  }
}
  render() {

    return (
      <div>
        {this.renderizarPage()}
        <Button1 onClick={() => this.setState({ etapa: 1 })}>Cadastro</Button1>
        <Button2 onClick={() => this.setState({ etapa: 2 })}>Pagina de usuários</Button2>
      </div>
    )
  }
}

