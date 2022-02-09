import React from 'react';
import './enviaMsg.css';

class MensagemNova extends React.Component {
    state = {
        mensagem: [
            {
          valorInputUsuario: '',
          valorInputMensagem: '',
    },
    ],
    }
    adicionaMensagem = () => {
      const novaMsg = {
        valorInputMensagem: this.state.valorInputMensagem, 
        valorInputUsuario: this.state.valorInputUsuario,
      };
      const novaMensagemArray = [...this.state.mensagem, novaMsg];
      this.setState({mensagem: novaMensagemArray});
      this.setState({
          valorInputUsuario: '',
          valorInpuMensagem: '',
      });
    }
    onChangeinputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value});
    }
    onChangeinputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value});
    }
    render() {
        return (
            <div className='principal'>
                <div className='titulo'>
            <ul className='mensagem'>
            {this.state.mensagem.map(mensagem => (
                <li className='lista' key={mensagem.valorInputUsuario}>
                    {mensagem.valorInputUsuario}
                    <p>{mensagem.valorInputMensagem}</p>
                </li>
            ))}
            </ul>
            </div>
            <footer className='form'>
            <input className='form-nome' type="search" placeholder="Nome" value={this.state.valorInputUsuario} onChange={this.onChangeinputUsuario}/>
            <input className='form-mensagem' type='text' placeholder="Mensagem" value={this.state.valorInputMensagem} onChange={this.onChangeinputMensagem} />
            <button className='botao' onClick={this.adicionaMensagem}>Enviar</button>
            </footer>
            </div>
        );
    }
}
export default MensagemNova