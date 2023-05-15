import React from "react";
import scrapedData from "./../utils/scrapedData";
import Top from "./Top";

const Tierlist = () => {
  return (
    <>
      <div className="winrate-container mx-auto">
        <Top></Top>
        <h1 className="text-center my-5">
          Winrate per champion 13.9{" "}
        </h1>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">Champion</th>
              <th scope="col">Name</th>
              <th scope="col">Winrate</th>
            </tr>
          </thead>
          <tbody>
            {scrapedData.map((champion) => (
              <tr key={champion.champion}>
                <td>
                  <img
                    src={`./champion_images/${champion.champion}.png`}
                    alt={champion.champion}
                    style={{ height: 30 }}
                  />
                </td>
                <td className="align-middle">{champion.champion}</td>
                <td
                  className={`align-middle ${
                    parseFloat(champion.winRate) >= 50
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {champion.winRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </>
  );
};

export default Tierlist;
