import React, { useState } from "react";
import champions from "./utils/champions";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const filteredChampions = champions.filter((champion) =>
    champion.toLowerCase().includes(filter)
  );

  return (
    <div className="App">
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter champions"
      />
      {filteredChampions.map((champion) => (
        <img
          key={champion}
          src={`./champion_images/${champion}.png`}
          alt={champion}
          style={{ width: 50 }}
        />
      ))}
    </div>
  );
}

export default App;
