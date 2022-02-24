import axios from 'axios';
import React, { Component } from 'react';
import PaginaUser from './paginaUsers';
import style from 'styled-components';

const requestCadastro = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
        Authorization: 'anderson-franciscato-guimaraes' }
        })

const Input = style.input`
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0 15px;
    margin: 10px 0;
    hover: {
        border: 1px solid #ccc;
    }
`;
const Button = style.button`
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
    border-radius: 10px;
    hover: {
        opacity: 1;
        collor: #fff;
    }
`;

class Cadastro extends Component {
 state = {
    usuarios: []
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
  nextPage() {
    this.props.history.push(<PaginaUser />)
  }
  render() {

    return (
      <div className="App">
          <h1>Cadastro de Usuários</h1>
        <div>
          <Input
            type="text"
            placeholder="Nome"
            value={this.state.nameImput}
            onChange={(event) => this.onChangeinputUsuario(event)}
          />
          <Input
            type="email"
            placeholder="Email"
            value={this.state.emailImput}
            onChange={(event) => this.onChangeinputEmail(event)}
          />
          <Button onClick={() => this.createCadastro()}>Cadastrar</Button>
        </div>
      </div>
    );
  }
}
export default Cadastro;