import React, { useState, useEffect, useRef } from 'react';
import "../../assets/css/UserDashboard/MyPlans_Content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';

function MyPlans_Content() {

  const [plans] = useState([
    {
      plan: "2TB CLOUD DRIVE",
      songs: [
        {song: "song-1", category: "Afrobeat", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/Myrath+-+Hope.mp3"},
        {song: "song-2", category: "Hip-Hop", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/2Pac+-+California+Love+feat.+Dr.+Dre+(Dirty)+(Music+Video)+HD.mp3"},
        {song: "song-3", category: "RAP", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/PAUSE+-+JOUJ+MIZAN+feat.+Diib+(+PROD+BY.TEASLAX+x+DRACONIC+).mp3"},
        {song: "song-5", category: "K-POP", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/Pop+Smoke+-+Gangstas.mp3"},
      ]
    },
    {
      plan: "1TB CLOUD DRIVE",
      songs: [
        {song: "song-6", category: "Hip-Hop", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/Myrath+-+Hope.mp3"},
        {song: "song-8", category: "RAP", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/2Pac+-+California+Love+feat.+Dr.+Dre+(Dirty)+(Music+Video)+HD.mp3"},
        {song: "song-9", category: "Afrobeat", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/PAUSE+-+JOUJ+MIZAN+feat.+Diib+(+PROD+BY.TEASLAX+x+DRACONIC+).mp3"},
        {song: "song-10", category: "K-POP", listen: "https://djmusic-test-s3-bucket.s3.amazonaws.com/Pop+Smoke+-+Gangstas.mp3"},
      ]
    }
  ]);
  const initialSelectedSongs = plans.reduce((acc, plan) => {
    acc[plan.plan] = []; // Initialize an empty array for each plan
    return acc;
  }, {});
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());
  const [selectedSongs, setSelectedSongs] = useState({});

  useEffect(() => {
    const audio = audioRef.current;
  
    const setAudioData = () => {
      setCurrentSong(current => ({ ...current, duration: audio.duration }));
    };
  
    const setAudioTime = () => {
      setCurrentSong(current => ({ ...current, currentTime: audio.currentTime }));
    };
  
    if (currentSong) {
      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
    }
  
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [currentSong?.song]);

  const playSong = (song) => {
    const audio = audioRef.current;
    const isCurrentSong = currentSong && song.song === currentSong.song;
  
    if (isCurrentSong && !audio.paused) {
      audio.pause();
      setCurrentSong(null); // Update state to reflect that nothing is playing
    } else {
      if (isCurrentSong) {
        audio.play();
      } else {
        audio.src = song.listen;
        audio.play();
        setCurrentSong({ song: song.song, currentTime: 0, duration: 0 });
      }
    }
  };

  const getProgress = (song) => {
    return currentSong && song.song === currentSong.song
      ? (currentSong.currentTime / currentSong.duration) * 100
      : 0;
  };

  // Function to handle selection
  const toggleSongSelection = (planName, song) => {
    setSelectedSongs(prev => ({
      ...prev,
      [planName]: prev[planName].includes(song.song)
        ? prev[planName].filter(s => s !== song.song)
        : [...prev[planName], song.song]
    }));
  };

  // Function to handle select/deselect all
  const toggleSelectAll = (planName, songs) => {
    setSelectedSongs(prev => ({
      ...prev,
      [planName]: prev[planName]?.length === songs.length ? [] : songs.map(s => s.song)
    }));
  };

  //Download Functionality
  // const downloadSelectedSongs = async (planName) => {
  //   const zip = new window.JSZip(); // Access JSZip from the global window object
  //   const selected = selectedSongs[planName] || [];
  
  //   const plan = plans.find(p => p.plan === planName);
  //   const songsToDownload = selected.length ? plan.songs.filter(s => selected.includes(s.song)) : plan.songs;
  
  //   for (let song of songsToDownload) {
  //     try {
  //       const response = await fetch(song.listen);
  //       const blob = await response.blob();
  //       zip.file(song.song, blob);
  //     } catch (error) {
  //       console.error("There was an error fetching the song:", error);
  //     }
  //   }
  
  //   zip.generateAsync({ type: "blob" }).then(content => {
  //     const element = document.createElement("a");
  //     const file = new Blob([content], { type: "application/zip" });
  
  //     element.href = URL.createObjectURL(file);
  //     element.download = `${planName}.zip`;
  //     document.body.appendChild(element); // Required for this to work in FireFox
  //     element.click();
  //     document.body.removeChild(element); // Clean up
  //   });
  // };

  const downloadSelectedSongs = async (planName) => {
    const zip = new window.JSZip(); // Access JSZip from the global window object
    const selected = selectedSongs[planName] || [];
  
    const plan = plans.find(p => p.plan === planName);
    const songsToDownload = selected.length ? plan.songs.filter(s => selected.includes(s.song)) : plan.songs;
  
    const filePromises = songsToDownload.map(song => {
      return fetch(song.listen)
        .then(response => {
          if (!response.ok) throw new Error(`Network response was not ok, status: ${response.status}`);
          return response.blob();
        })
        .then(blob => {
          console.log(`Adding ${song.song} to zip`); // Log for debugging
          zip.file(song.song, blob);
        })
        .catch(error => {
          console.error("There was an error fetching the song:", error);
        });
    });
  
    // Wait for all fetch requests to complete
    await Promise.all(filePromises);
  
    // Check if any songs have been added to the zip
    if (zip.files.length === 0) {
      console.error("No songs were added to the zip.");
      return;
    }
  
    // Generate the zip file
    zip.generateAsync({ type: "blob" }).then(content => {
      const element = document.createElement("a");
      const file = new Blob([content], { type: "application/zip" });
      const url = URL.createObjectURL(file);
  
      element.href = url;
      element.download = `${planName.replace(/\s/g, '_')}.zip`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
    }).catch(error => {
      console.error("There was an error generating the zip:", error);
    });
  };

  //main function return
  return (
    <div className='myPlans_container'>
      <h2>MY PLANS</h2>
      <div>
        <div className="plans-list-container">
          {plans.map((plan, index) => (
            <div key={index}>
              <h3 className="plan-title">{plan.plan}</h3>
              <table className="song-table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        checked={selectedSongs[plan.plan] && selectedSongs[plan.plan].length === plan.songs.length}
                        onChange={() => toggleSelectAll(plan.plan, plan.songs)}
                      />
                    </th>
                    <th>Song</th>
                    <th>Category</th>
                    <th>Listen</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.songs.map((song, songIndex) => (
                    <tr key={songIndex}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedSongs[plan.plan] && selectedSongs[plan.plan].includes(song.song)}
                          onChange={() => toggleSongSelection(plan.plan, song)}
                        />
                      </td>
                      <td>{song.song}</td>
                      <td>{song.category}</td>
                      <td className='listen'>
                        <button onClick={() => playSong(song)} className='listen-button'>
                        <FontAwesomeIcon icon={currentSong && currentSong.song === song.song && !audioRef.current.paused ? faCirclePause : faCirclePlay} />
                        </button>
                        <progress value={getProgress(song)} max="100"></progress>
                      </td>
                      <td>
                      <a href={song.listen} className="download-icon" download target="_blank" rel="noopener noreferrer">
                        🔽
                      </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => downloadSelectedSongs(plan.plan)} className='download-all-btn'>
                Download {selectedSongs[plan.plan] && selectedSongs[plan.plan].length ? `(${selectedSongs[plan.plan].length})` : 'All'}
              </button>
              <div className="footer-note">
                That may take a while to make the songs ready, thanks for waiting!
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPlans_Content