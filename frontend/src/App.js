import championsDD from "./utils/champions";

function App() {
  return (
    <div className="App">
      {championsDD.map((champion) => {
        const championLowerCase = champion.toLowerCase();
        return (
          <img
            key={champion}
            src={`./champion_images/${champion}.png`}
            alt={`${champion}`}
            style={{width: 50}}
          />
        );
      })}
    </div>
  );
}

export default App;
