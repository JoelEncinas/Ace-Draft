import React, { useState } from "react";
import champions from "./utils/champions";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [clickedChampion, setClickedChampion] = useState("");

  const temp = ["", "", "", "", ""];

  const handleChampionClick = (champion) => {
    console.log(champion);
    setClickedChampion(champion);
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
            {temp.map((item, id) => (
              <img
                className="m-1"
                key={id}
                src={`./champion_images/1.png`}
                alt="no champion selected"
                style={{ width: 75 }}
              />
            ))}
          </div>
          <div className="col-sm-6">
            <div className="p-2 red text-right">Red Side</div>
            <div className="text-right">
              <div>
                {temp.map((item, id) => (
                  <img
                    className="m-1"
                    key={id}
                    src={`./champion_images/1.png`}
                    alt="no champion selected"
                    style={{ width: 75 }}
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
              {temp.map((item, id) => (
                <img
                  className="m-1"
                  key={id}
                  src={`./champion_images/1.png`}
                  alt="no champion selected"
                  style={{ width: 75 }}
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
              {temp.map((item, id) => (
                <img
                  className="m-1"
                  key={id}
                  src={`./champion_images/1.png`}
                  alt="no champion selected"
                  style={{ width: 75 }}
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
