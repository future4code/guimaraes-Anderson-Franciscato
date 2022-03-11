import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Playlist = styled.div`
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

const createPlaylist = axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
    headers: {
        Authorization: 'anderson-franciscato-guimaraes'
    }
});

const requestPlaylist = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
    headers: {
        Authorization: 'anderson-franciscato-guimaraes'
    }
});


const Input = styled.input`
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

const Button = styled.button`
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

class CreatePlaylist extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
    requestPlaylist.then(response => {
      this.setState({
        playlists: response.data
      })
      .catch(error => {
        console.log (error.message)
            })
        })
    }

    onChangeInputPlaylist(event) {
        this.setState({
            namePlaylist: event.target.value
        })
    }
    createPlaylist() {
        const body = {
            name: this.state.namePlaylist
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'anderson-franciscato-guimaraes'
            }
        })
        .then(response => {
            console.log(response.data)
            alert('Playlist criada com sucesso')
            this.setState({ namePlaylist: '' })
            this.getPlaylist()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    
    render() {
        return (
            <div>
                <h1>Playlists</h1>
                <Input 
                type="text" 
                placeholder="Nome da playlist" 
                value={this.state.namePlaylist} 
                onChange={(event) => this.onChangeInputPlaylist(event)} 
                />
                <Button onClick={() => this.createPlaylist()}>Criar Playlist</Button>
            </div>
        )
    }
}
export default CreatePlaylist;