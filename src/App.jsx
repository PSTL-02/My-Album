import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    // HTTP request in here
    axios.get('./MUSIC.json')
      .then(response => {
        console.log(response.data);
        setMusics(response.data);
      }) // success
      .catch(error => {
        console.log(error);
      }); // fail
  }, []); // dependency left empty so it only runs once

  // Music cards
  const MusicCard = ({ musics }) => {
    const mappedMusics = musics.map((music, index) => {
      return (
        <div key={index} className='music-card'>
          <div className='music-img-cont'>
            <img src={music.albumCover} alt={music.name} />
          </div>

          <div className='description'>
            <h2>{music.name} </h2>
            <h2>{music.artist}</h2>
            <h3>{music.releaseDate}</h3>
          </div>
        </div>
      );
    }); // end of the map return
    return (
      <>
        {mappedMusics}
      </>
    ); // end of the music card return
  };

  // MASTER RETURN
  return (
    <>
      <div className='music-card-box'>
        <MusicCard musics={musics} />
      </div>
    </>
  );
};

export default App;
