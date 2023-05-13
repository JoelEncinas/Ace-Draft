import React, { useState } from "react";
import champions from "./utils/champions";

import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [pickedChampions, setPickedChampions] = useState([]);

  const [blueBans, setBlueBans] = useState([
    {
      id: 1,
      selectedChampion: "1",
    },
    {
      id: 2,
      selectedChampion: "1",
    },
    {
      id: 3,
      selectedChampion: "1",
    },
    {
      id: 4,
      selectedChampion: "1",
    },
    {
      id: 5,
      selectedChampion: "1",
    },
  ]);

  const handleChampionClick = (champion) => {
    console.log(champion);
    if (selectedPosition) {
      const updatedPick = {
        id: selectedPosition,
        selectedChampion: champion,
      };

      updateElement(selectedPosition, updatedPick);
      setSelectedPosition(null);
      setPickedChampions(pickedChampions.concat(champion));
    } else {
      setSelectedChampion(champion);
    }
  };

  const handleElementClick = (id) => {
    console.log(id);

    if (selectedChampion) {
      const updatedPick = {
        id: id,
        selectedChampion: selectedChampion,
      };

      updateElement(id, updatedPick);
      setSelectedChampion(null);
      setPickedChampions(pickedChampions.concat(selectedChampion));
    } else {
      setSelectedPosition(id);
    }
  };

  const updateElement = (id, updatedElement) => {
    setBlueBans((prevElements) => {
      const updatedElements = prevElements.map((element) => {
        if (element.id === id) {
          return { ...element, ...updatedElement };
        }
        return element;
      });
      return updatedElements;
    });
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
            {blueBans.map((element) => (
              <div key={element.id}>
                <img
                  className={`m-1 clickable ${
                    selectedPosition === element.id ? "active" : ""
                  }`}
                  src={`./champion_images/${element.selectedChampion}.png`}
                  alt={element.selectedChampion}
                  onClick={() => handleElementClick(element.id)}
                  style={{ height: 75 }}
                />
              </div>
            ))}
          </div>
          <div className="col-sm-6">
            <div className="p-2 red text-right">Red Side</div>
            <div className="text-right">
              <div></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div></div>
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
                      className={`m-1 clickable ${
                        selectedChampion === champion ? "active" : ""
                      } ${pickedChampions.includes(champion) ? "picked" : ""}`}
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
