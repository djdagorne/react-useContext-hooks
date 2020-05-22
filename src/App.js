import React from 'react';
import { MusicPlayerProvider } from './MusicPlayerContext';
import TrackList from './TrackList.js';
import PlayerControls from './PlayerControls'
import './App.css';

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList/>
        <PlayerControls/>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
