import React from 'react';
import axios from 'axios';
import style from 'styled-components';

const Playlist = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0px 0px 10px #000000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0px 0px 20px #000000;
    }
`;

class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'anderson-franciscato-guimaraes'
            }
        })
        .then(response => {
            this.setState({
                playlists: response.data.result.list
            })
        })
        .catch(error => {
            alert('Erro ao carregar as playlists');
        })
    }
    mostrarPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'anderson-franciscato-guimaraes'
            }
        })
        const playlists = this.state.playlists.map(playlist => {
            return (
                <Playlist>
                    <h1>{playlist.name}</h1>
                </Playlist>
            )
        })
        return playlists;
    }

    render() {
        return (
            <div>
                {this.mostrarPlaylists()}
            </div>
        )
    }
}

export default Playlists;