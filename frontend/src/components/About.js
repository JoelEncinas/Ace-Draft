const About = () => {
  return (
    <>
      <div className="about-container mx-auto">
        <h1 className="text-center my-5">About</h1>

        <h2 className="mb-2">The Idea</h2>
        <p>
          Drawing inspiration from apps used for planning drafts, discussing
          pick/ban strategies, and theorycrafting team compositions like{" "}
          <a href="https://drafting.gg/draft" target="_blank" rel="noreferrer">
            drafting.gg
          </a>{" "}
          I have developed a tool that simplifies the process of selecting picks
          and bans during champion select. In addition to this functionality, I
          have incorporated a page that displays the win rates for champions
          based on the most recent patch available at the time of building the
          site.
        </p>

        <h2 className="mb-2">Tech</h2>
        <p>
          The page utilizes the core functionality of React while implementing
          various best practices and techniques that were not employed in my
          previous project,{" "}
          <a
            href="https://lux-stats.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Lux
          </a>
          . The tier list data is obtained by scraping{" "}
          <a href="https://u.gg/" target="_blank" rel="noreferrer">
            u.gg
          </a>{" "}
          using node, cheerio and axios. To enhance the visual appearance, a
          Bootstrap theme has been applied for styling purposes.
        </p>
      </div>
    </>
  );
};

export default About;
