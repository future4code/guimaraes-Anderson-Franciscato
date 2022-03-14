import React from 'react';
import axios from 'axios';
import style from 'styled-components';

class addSongs extends React.Component {
    state = {
        name : [],
        artist : [],
        url : [],
    }

    componentDidMount() {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks', {
            headers: {
                Authorization: 'anderson-franciscato-guimaraes'
            }
        })
        .then(response => {
            alert ("Musica adicionada com sucesso!");
            this.setState({
                name: response.data.result.tracks.name,
            })
        })
        .catch(error => {
            alert('Erro ao adicionar a musica');
        })
    }
    onSubmit() {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks', body, {
            headers: {
                Authorization: 'anderson-franciscato-guimaraes'
            }
        })
        .then(response => {
            alert ("Musica adicionada com sucesso!");
        })
        .catch(error => {
            alert('Erro ao adicionar a musica');
        })
    }
    onClick(event) {
        event.preventDefault();
        this.onSubmit();
    }

    render() {
        return (
            <div>
                <h1>"Adicionar uma musica"</h1>
                <form>
                    <label>Nome da musica:</label>
                    <input type="text" name="name" value="name" />
                    <label>Nome do artista:</label>
                    <input type="text" name="artist" value="artist" />
                    <label>URL da musica:</label>
                    <input type="text" name="url" value="url" />
                    <button type="submit" 
                    onClick={this.onClick.bind(this)}>Adicionar</button>
                </form>
            </div>
        )
    }
}