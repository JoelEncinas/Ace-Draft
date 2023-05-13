import React, { useState } from "react";
import champions from "./utils/champions";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [clickedPosition, setClickedPosition] = useState(null);

  const [blueBans, setBlueBans] = useState([
    {
      id: 1,
      selectedChampion: "none",
    },
    {
      id: 2,
      selectedChampion: "none",
    },
    {
      id: 3,
      selectedChampion: "none",
    },
    {
      id: 4,
      selectedChampion: "none",
    },
    {
      id: 5,
      selectedChampion: "none",
    },
  ]);

  const redPicks = {
    rp1: 16,
    rp2: 17,
    rp3: 18,
    rp4: 19,
    rp5: 20,
  };

  const handleChampionClick = (champion) => {
    console.log(champion);
    setSelectedChampion(champion);
  };

  const handlePositionClick = (position) => {
    if (selectedChampion) {
      console.log(position);
    } else {
      setClickedPosition(position);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredChampions = champions.filter((champion) =>
    champion
      .toLowerCase()
      .replace(/[.'\s]/g, "")
      .includes(filter)
  );

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="p-2 blue">Blue Side</div>
            
          </div>
          <div className="col-sm-6">
            <div className="p-2 red text-right">Red Side</div>
            <div className="text-right">
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div>

            </div>
          </div>
          <div className="col-sm-8">
            <div className="p-2">
              <div className="text-center mb-3">
                <input
                  type="text"
                  value={filter}
                  onChange={handleFilterChange}
                  placeholder="Search"
                />
              </div>
              <div className="container draft">
                <div>
                  {filteredChampions.map((champion) => (
                    <img
                      className={`m-1 ${
                        setSelectedChampion === champion ? "active" : ""
                      }`}
                      key={champion}
                      src={`./champion_images/${champion}.png`}
                      alt={champion}
                      style={{ height: 75 }}
                      onClick={() => handleChampionClick(champion)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="text-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
