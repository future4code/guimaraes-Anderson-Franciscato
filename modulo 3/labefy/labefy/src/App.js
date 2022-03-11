import logo from './logo.svg';
import './App.css';
import Playlists from './components/playlists';
import React from 'react';
import CreatePlaylist from './components/createplaylist';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Playlists />
        <CreatePlaylist />
      </div>
    );
  }
}