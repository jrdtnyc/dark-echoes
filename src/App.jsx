import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <p>Select an episode to view</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2 className="episodeNumber">Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p className="description">{selectedEpisode.description}</p>
        <button className="watchButton">Watch Now</button>
      </section>
    );
  }

  function Episodes() {
    return (
      <section className="episodes">
        <h2 className="episodesHeader">Episodes</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header className="showTitleContainer">
        <h1 className="showTitle">Dark Echoes</h1>
      </header>
      <main>
        <Episodes />
        <EpisodeDetails />
      </main>
    </>
  );
}
