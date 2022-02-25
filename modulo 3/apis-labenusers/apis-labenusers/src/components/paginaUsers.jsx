import React from "react";
import axios from "axios";
import style from "styled-components";

const Ul = style.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;
const ButtonDeleted = style.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    opacity: 0.9;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-left: 6%;
    hover: {
        opacity: 1;
        collor: #fff;
    }
`;
const Li = style.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
`;


class Cadastro extends React.Component {
    state = {
        usuarios: []
    }
    
    deletarUsuario = (usuarioId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers: {
                Authorization: "anderson-franciscato-guimaraes"
            }
        })
            .then(response => {
                console.log(response.data)
                alert("Usuário deletado com sucesso")
                this.getUserByld()
            })
            .catch(error => {
                console.log(error.message)
                alert ("Erro ao deletar usuário")
            })
    }

    componentDidMount() {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "anderson-franciscato-guimaraes"
            }
        })
            .then(response => {
                this.setState({
                    usuarios: response.data
                })
            })
            .catch(error => {   
                alert ("Erro ao buscar usuários")
            })
    }
    mostrarUsuarios = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "anderson-franciscato-guimaraes"
            }
        })
        const usuarios = this.state.usuarios.map(usuario => {
            return (
                <Li key={usuario.id}>
                    {usuario.name}
                    {usuario.email}
                    <ButtonDeleted onClick={() => this.deletarUsuario(usuario.id)}>Deletar</ButtonDeleted>
                </Li>
            )
        })
        return usuarios
    }
    render() {
        return (
            <div className="App">
                <h1>Cadastro de Usuários</h1>
                <Ul>
                    {this.mostrarUsuarios()}
                </Ul>
            </div>
        );
    }
}
export default Cadastro;
