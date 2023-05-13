import React, { useState } from "react";
import champions from "./utils/champions";

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
      <div className="text-center">
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search"
        />
      </div>
      <div className="container">
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
  );
}

export default App;
