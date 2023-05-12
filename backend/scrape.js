const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const champions = require("./champions.js");
const rank = "master_plus"; // Rank parameter

const baseUrl = "https://u.gg/lol/champions/";
const data = [];

const scrapeData = async (champion) => {
  const url = `${baseUrl}${champion.toLowerCase()}/build?rank=${rank}`;

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      const winRate = $(".win-rate .value").text();

      data.push({ champion, winRate });

      console.log(`Scraped data for ${champion}`);
    }
  } catch (error) {
    console.log(`Error scraping data for ${champion}:`, error);
  }
};

const scrapeAllChampions = async () => {
  for (const champion of champions) {
    await scrapeData(champion);
  }

  // Convert the data to JSON-like string
  const jsonData = JSON.stringify(data, null, 2);

  // Write the data to a JavaScript file
  fs.writeFile(
    "scrapedData.js",
    `const data = ${jsonData};\n\nmodule.exports = data;`,
    (err) => {
      if (err) throw err;
      console.log("Data saved to scrapedData.js");
    }
  );
};

scrapeAllChampions();
