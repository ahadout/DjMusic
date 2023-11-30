import React, {useState, useEffect, useRef} from "react";
import "../../assets/css/Home/Home_Section5.css";
import AudioPlayer from "../../components/AudioPlayer";

function Home_Section5() {

  const [tracks, setTracks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [activeCategory, setActiveCategory] = useState(null);
  const [previewTracks, setPreviewTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/tracks`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTracks(data);
        const uniqueCategories = Array.from(new Set(data.map(categories => categories.category)))
                                     .map(category => {
                                       return data.find(categories => categories.category === category)
                                     });
        setCategories(uniqueCategories);
        setActiveCategory(uniqueCategories[0]?.category);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchTracks();
  }, [backendUrl]);

  useEffect(() => {
    const categoryTracks = tracks.filter(track => track.category === activeCategory && track.preview);
    setPreviewTracks(categoryTracks.slice(0, 2)); // Take only the first two tracks with preview true
  }, [tracks, activeCategory]);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
  };

  if (error) {
    console.log(`Error loading categories: ${error}`);
    return <p>Error loading categories</p>;
  }

  return (
    <section id="Home_section5">
      <h1>Preview Tracks Easily</h1>
      <p>
        We offer a special way to preview the songs befor buying, Try it NOW!
      </p>
      <hr />
      <div id="Home_section5_main">
        <div id="Home_section5_main_categories">
          <h2>CATEGORIES</h2>
          <ul>
            {categories.slice(0, 6).map((category, index) => (
              <li key={index}
                  className={category.category === activeCategory ? "category-active" : ""}
                  onClick={() => handleCategoryClick(category.category)}>
                {category.category}
              </li>
            ))}
          </ul>
        </div>
        <div className="home-preview-tracks-container">
          <h2>{activeCategory}</h2>
          {previewTracks.map((track, index) => (
            <div key={index} className="samples-container">
              <p id="preview-sample">Sample {index + 1}: </p>
              <span className="track-name">{track.name}</span>
              {/* <audio controls key={track.s3_url}>
                <source src={track.s3_url} type="audio/mpeg" />
              </audio> */}
              <AudioPlayer key={track.s3_url} src={track.s3_url} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <a href="/hard-drives"><button className="bottom-link">You can buy our music plans from here &rarr;</button></a>
    </section>
  );
}

export default Home_Section5;
