import React, { useState } from "react";
import champions from "./utils/champions";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [clickedChampion, setClickedChampion] = useState("");
  const [clickedPosition, setClickedPosition] = useState("");

  const blueBans = {
    bb1: 1,
    bb2: 2,
    bb3: 3,
    bb4: 4,
    bb5: 5,
  };

  const redBans = {
    rb1: 6,
    rb2: 7,
    rb3: 8,
    rb4: 9,
    rb5: 10,
  };

  const bluePicks = {
    bp1: 11,
    bp2: 12,
    bp3: 13,
    bp4: 14,
    bp5: 15,
  };

  const redPicks = {
    rp1: 16,
    rp2: 17,
    rp3: 18,
    rp4: 19,
    rp5: 20,
  };

  const handleChampionClick = (champion) => {
    console.log(champion);
    setClickedChampion(champion);
  };

  const handlePositionClick = (position) => {
    if (clickedChampion) {
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
            {Object.keys(blueBans).map((key) => (
              <img
                className="m-1"
                key={key}
                src={`./champion_images/1.png`}
                alt="no champion selected"
                style={{ width: 75 }}
                onClick={() => handlePositionClick(key)}
              />
            ))}
          </div>
          <div className="col-sm-6">
            <div className="p-2 red text-right">Red Side</div>
            <div className="text-right">
              <div>
                {Object.keys(redBans).map((key) => (
                  <img
                    className="m-1"
                    key={key}
                    src={`./champion_images/1.png`}
                    alt="no champion selected"
                    style={{ width: 75 }}
                    onClick={() => handlePositionClick(key)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div>
              {" "}
              {Object.keys(bluePicks).map((key) => (
                <img
                  className="m-1"
                  key={key}
                  src={`./champion_images/1.png`}
                  alt="no champion selected"
                  style={{ width: 75 }}
                  onClick={() => handlePositionClick(key)}
                />
              ))}
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
                        clickedChampion === champion ? "active" : ""
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
            <div className="text-right">
              {Object.keys(redPicks).map((key) => (
                <img
                  className="m-1"
                  key={key}
                  src={`./champion_images/1.png`}
                  alt="no champion selected"
                  style={{ width: 75 }}
                  onClick={() => handlePositionClick(key)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
