import React, { useState } from "react";
import champions from "./utils/champions";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");

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
          <div className="col-sm-2">
            <div className="p-2 blue">Blue Side</div>
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
              <div className="container d-flex flex-wrap justify-content-center draft">
                {filteredChampions.map((champion) => (
                  <img
                    className="m-1"
                    key={champion}
                    src={`./champion_images/${champion}.png`}
                    alt={champion}
                    style={{ width: 75 }}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="p-2 red">Red Side</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
