import React, { useState } from "react";
import champions from "./../utils/champions";
import Reset from "./Reset";

function Draft() {
  const [filter, setFilter] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [pickedChampions, setPickedChampions] = useState([]);

  const [picks, setPicks] = useState([
    {
      id: 1,
      selectedChampion: "1",
      draft: "BB1",
    },
    {
      id: 2,
      selectedChampion: "1",
      draft: "BB2",
    },
    {
      id: 3,
      selectedChampion: "1",
      draft: "BB3",
    },
    {
      id: 4,
      selectedChampion: "1",
      draft: "BB4",
    },
    {
      id: 5,
      selectedChampion: "1",
      draft: "BB5",
    },
    {
      id: 6,
      selectedChampion: "1",
      draft: "RB1",
    },
    {
      id: 7,
      selectedChampion: "1",
      draft: "RB2",
    },
    {
      id: 8,
      selectedChampion: "1",
      draft: "RB3",
    },
    {
      id: 9,
      selectedChampion: "1",
      draft: "RB4",
    },
    {
      id: 10,
      selectedChampion: "1",
      draft: "RB5",
    },
    {
      id: 11,
      selectedChampion: "1",
      draft: "B1",
    },
    {
      id: 12,
      selectedChampion: "1",
      draft: "B2",
    },
    {
      id: 13,
      selectedChampion: "1",
      draft: "B3",
    },
    {
      id: 14,
      selectedChampion: "1",
      draft: "B4",
    },
    {
      id: 15,
      selectedChampion: "1",
      draft: "B5",
    },
    {
      id: 16,
      selectedChampion: "1",
      draft: "R1",
    },
    {
      id: 17,
      selectedChampion: "1",
      draft: "R2",
    },
    {
      id: 18,
      selectedChampion: "1",
      draft: "R3",
    },
    {
      id: 19,
      selectedChampion: "1",
      draft: "R4",
    },
    {
      id: 20,
      selectedChampion: "1",
      draft: "R5",
    },
  ]);

  const handleChampionClick = (champion) => {
    if (!pickedChampions.includes(champion)) {
      if (selectedPosition) {
        const updatedPick = {
          id: selectedPosition,
          selectedChampion: champion,
        };

        updateElement(selectedPosition, updatedPick);
        setSelectedPosition(null);

        const element = picks.find((pick) => pick.id === selectedPosition);
        if (element) {
          if (element.selectedChampion === "1") {
            setPickedChampions(pickedChampions.concat(champion));
          } else {
            setPickedChampions((prevChampions) => {
              const updatedChampions = prevChampions.concat(champion);
              return updatedChampions.filter(
                (champion) => champion !== element.selectedChampion
              );
            });
          }
        }
      } else {
        setSelectedChampion(champion);
      }
    }
  };

  const handleElementClick = (id) => {
    if (selectedChampion) {
      const updatedPick = {
        id: id,
        selectedChampion: selectedChampion,
      };

      updateElement(id, updatedPick);
      setSelectedChampion(null);

      const element = picks.find((pick) => pick.id === id);
      if (element) {
        if (element.selectedChampion === "1") {
          setPickedChampions(pickedChampions.concat(selectedChampion));
        } else {
          setPickedChampions((prevChampions) => {
            const updatedChampions = prevChampions.concat(selectedChampion);
            return updatedChampions.filter(
              (champion) => champion !== element.selectedChampion
            );
          });
        }
      }
    } else {
      if (selectedPosition) {
        const pick = picks.find((pick) => pick.id === selectedPosition);
        const otherPick = picks.find((pick) => pick.id === id);
        if (
          pick.selectedChampion === "1" &&
          otherPick.selectedChampion === "1"
        ) {
          setSelectedPosition(id);
        } else {
          const { selectedChampion: temp } = pick;
          pick.selectedChampion = otherPick.selectedChampion;
          otherPick.selectedChampion = temp;

          updateElement(selectedPosition, pick);
          updateElement(id, otherPick);
          setSelectedPosition(null);
        }
      } else {
        setSelectedPosition(id);
      }
    }
  };

  const handleRightClick = (id, e) => {
    e.preventDefault();

    const pick = picks.find((pick) => pick.id === id);
    const currentChampion = pick.selectedChampion;

    pick.selectedChampion = "1";
    updateElement(id, pick);

    setPickedChampions((prevChampions) => {
      return prevChampions.filter((champion) => champion !== currentChampion);
    });

    setSelectedPosition(null);
    setSelectedChampion(null);
  };

  const updateElement = (id, updatedElement) => {
    setPicks((prevElements) => {
      const updatedElements = prevElements.map((element) => {
        if (element.id === id) {
          return { ...element, ...updatedElement };
        }
        return element;
      });
      return updatedElements;
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const preventEvent = (e) => {
    e.preventDefault();
  };

  const filteredChampions = champions.filter((champion) =>
    champion
      .toLowerCase()
      .replace(/[.'\s]/g, "")
      .includes(filter)
  );

  const reset = () => {
    setFilter("");
    setSelectedChampion(null);
    setSelectedPosition(null);
    setPickedChampions([]);
    setPicks((prevPicks) =>
      prevPicks.map((pick) => ({ ...pick, selectedChampion: "1" }))
    );
  };

  const blueBans = picks.slice(0, 5);
  const redBans = picks.slice(5, 10);
  const bluePicks = picks.slice(10, 15);
  const redPicks = picks.slice(15, 20);

  const titleText =
    "Left click champion then position or viceversa to select champion.\nRight click to remove champion from position.\nBin icon for resetting the draft.";

  return (
    <div className="App">
      <div className="container main-container app-container">
        <Reset reset={reset} />
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="p-2 blue">Blue Side</div>
            <div className="d-flex justify-content-start">
              {blueBans.map((element) => (
                <span key={element.id}>
                  <img
                    className={`m-1 clickable ${
                      selectedPosition === element.id ? "active" : ""
                    }`}
                    src={`./champion_images/${element.selectedChampion}.png`}
                    alt={element.selectedChampion}
                    onClick={() => handleElementClick(element.id)}
                    onContextMenu={(e) => handleRightClick(element.id, e)}
                  />
                </span>
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="p-2 red text-right">Red Side</div>
            <div className="d-flex justify-content-end">
              {redBans.map((element) => (
                <span key={element.id}>
                  <img
                    className={`m-1 clickable ${
                      selectedPosition === element.id ? "active" : ""
                    }`}
                    src={`./champion_images/${element.selectedChampion}.png`}
                    alt={element.selectedChampion}
                    onClick={() => handleElementClick(element.id)}
                    onContextMenu={(e) => handleRightClick(element.id, e)}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="how-to-use" title={titleText}>
            How to use?
          </p>
        </div>

        <div className="row">
          <div className="col-6 col-sm-6 col-md-2 order-1 order-sm-1 order-md-1">
            <span style={{ height: 55, width: 75, display: "block" }} />

            {bluePicks.map((element) => (
              <div className="d-flex align-items-center" key={element.id}>
                <span className="blue-text">{element.draft}</span>
                <img
                  className={`m-1 clickable ${
                    selectedPosition === element.id ? "active" : ""
                  }`}
                  src={`./champion_images/${element.selectedChampion}.png`}
                  alt={element.selectedChampion}
                  onClick={() => handleElementClick(element.id)}
                  onContextMenu={(e) => handleRightClick(element.id, e)}
                  style={{ height: 65 }}
                />
              </div>
            ))}
          </div>
          <div className="col-12 col-sm-12 col-md-8 order-3 order-sm-3 order-md-2 container">
            <div className="p-2">
              <div className="input-group w-50 mx-auto text-center mb-2">
                <input
                  className="form-control"
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
                      onClick={() => handleChampionClick(champion)}
                      onContextMenu={(e) => preventEvent(e)}
                      style={{ height: 65 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-2 order-2 order-sm-2 order-md-3 text-right">
            <span style={{ height: 55, width: 75, display: "block" }} />
            {redPicks.map((element) => (
              <div
                className="d-flex align-items-center justify-content-end"
                key={element.id}
              >
                <img
                  className={`m-1 clickable ${
                    selectedPosition === element.id ? "active" : ""
                  }`}
                  src={`./champion_images/${element.selectedChampion}.png`}
                  alt={element.selectedChampion}
                  onClick={() => handleElementClick(element.id)}
                  onContextMenu={(e) => handleRightClick(element.id, e)}
                  style={{ height: 65 }}
                />
                <span className="red-text ml-2">{element.draft}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Draft;
