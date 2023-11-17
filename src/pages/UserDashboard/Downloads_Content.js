import React from 'react';
import "../../assets/css/UserDashboard/Downloads_Conent.css"

function Downloads_Content() {
  let Downloads = [
    {"file": "AfroBeat", "date": "2023-11-01"},
    {"file": "Dance Hall-Soca", "date": "2023-11-02"},
    {"file": "Hip Hop", "date": "2023-11-03"},
    {"file": "Latin", "date": "2023-11-04"},
    {"file": "MainStream", "date": "2023-11-05"},
    {"file": "Retro Instrumental", "date": "2023-11-06"},
    {"file": "R & B", "date": "2023-11-07"},
    {"file": "AfroBeat", "date": "2023-11-08"},
    {"file": "Dance Hall-Soca", "date": "2023-11-09"},
    {"file": "Hip Hop", "date": "2023-11-10"},
    {"file": "Latin", "date": "2023-11-11"},
  ]
  return (
    <div className='Downloads_container'>
      <p>Downloads</p>
      <ul className='Downloads'>
        {Downloads.map((download, index) => (
          <li key={index}>
            <strong>{download.file}</strong>  <span>{download.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Downloads_Content