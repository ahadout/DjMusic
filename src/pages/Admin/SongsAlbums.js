import React, {useState} from 'react';
import '../../assets/css/Admin/SongsAlbums.css';
import AdminHeader from "./AdminHeader";
import Footer from '../../components/Footer';


const Song = ({ title }) => (
    <div className="song-item">
      <span>{title}</span>
      <div className="song-actions">
        <button className="play-btn">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
  
  

const Album = ({ title, songs, openedAlbum, setOpenedAlbum }) => (
    <div className="album-container">
      <div className="album-header" onClick={() => setOpenedAlbum(title === openedAlbum ? null : title)}>
        <span>{title}</span>
        <div className="actions">
          <button className="delete-btn">Delete</button>
          <span className="arrow">{openedAlbum === title ? '▲' : '▼'}</span>
        </div>
      </div>
      {openedAlbum === title && songs.map(song => <Song title={song} key={song} />)}
    </div>
  );
  

const SongsAlbums = () => {
    const [openedAlbum, setOpenedAlbum] = useState(null);

  
  const albums = [
    { title: 'DemoAlbum', songs: ['DemoSong', 'DemoSong'] },
  ];
  
  const songs = ['DemoSong', 'DemoSong', 'DemoSong', 'DemoSong'];

  return (
    <>
    <AdminHeader />   
     <div className="songs-albums-container">
      <h2>SONGS-ALBUMS</h2>
      <div className="content">
        <div className="albums-section">
          <h3>ALBUMS</h3>
          {albums.map(album => <Album title={album.title} songs={album.songs} key={album.title} openedAlbum={openedAlbum} setOpenedAlbum={setOpenedAlbum} />)}
          <button className="upload-btn">UPLOAD NEW ALBUM</button>
        </div>
        
        <div className="songs-section">
          <h3>SONGS</h3>
          {songs.map(song => <Song title={song} key={song} />)}
          <button className="upload-btn">UPLOAD NEW SONG</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default SongsAlbums;
