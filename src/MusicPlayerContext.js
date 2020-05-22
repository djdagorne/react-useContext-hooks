import React, { useState } from 'react';
import Change from './assets/Change.mp3';
import Roses from './assets/Roses.mp3';
import Cat from './assets/Cat.mp3';

const MusicPlayerContext = React.createContext(
  [
    {}, 
    () => {}
  ]
); //empty object and function, within an array

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Change is Everything - Son Lux',
        file: Change
      },
      {
        name: 'Jealous of Roses - Bibio',
        file: Roses
      },
      {
        name: `A Fan's Mail (Tron Song Suite II) - Thundercat`,
        file: Cat
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
    /* currentTrackName: '', */
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>{/* no default value for the context */}
      {props.children}
    </MusicPlayerContext.Provider>
  )
};

export { MusicPlayerContext, MusicPlayerProvider }