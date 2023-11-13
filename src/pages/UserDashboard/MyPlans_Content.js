import React from 'react';
import "../../assets/css/UserDashboard/MyPlans_Content.css"

function MyPlans_Content() {

  let plans = [
    {
      plan: "2TB CLOUD DRIVE",
      songs: [
        {song: "song-1", category: "Afrobeat", listen: "", download: "#"},
        {song: "song-2", category: "Hip-Hop", listen: "", download: "#"},
        {song: "song-3", category: "RAP", listen: "", download: "#"},
        {song: "song-4", category: "Afrobeat", listen: "", download: "#"},
        {song: "song-5", category: "K-POP", listen: "", download: "#"},
      ]
    },
    {
      plan: "1TB CLOUD DRIVE",
      songs: [
        {song: "song-6", category: "Hip-Hop", listen: "", download: "#"},
        {song: "song-7", category: "Hip-Hop", listen: "", download: "#"},
        {song: "song-8", category: "RAP", listen: "", download: "#"},
        {song: "song-9", category: "Afrobeat", listen: "", download: "#"},
        {song: "song-10", category: "K-POP", listen: "", download: "#"},
      ]
    }
];

  return (
    <div className='myPlans_container'>
      <h2>MY PLANS</h2>
      <div>
        <div className="plans-list-container">
          {plans.map((plan, index) => (
            <div key={index}>
              <h3 className="plan-title">{plan.plan}</h3>
              <div>
                <table className="song-table">
                  <thead>
                    <tr>
                      <th>Song</th>
                      <th>Categorie</th>
                      <th>Listen</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.songs.map((song, songIndex) => (
                      <tr key={songIndex}>
                        <td>{song.song}</td>
                        <td>{song.category}</td>
                        <td>
                          <input type="range" className="listen-slider" />
                        </td>
                        <td>
                          <i className="download-icon">🔽</i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button className="download-all-btn">Download All</button>
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