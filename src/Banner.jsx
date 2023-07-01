import React from "react";

import { generateImageUrl, ImageSizes } from "../src/utils/tmdbutil";
import tmdbApi from "../src/api/tmdb";

const Banner = () => {
  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    const fetchBannerMovie = async () => {
      const json = await tmdbApi.get("/discover/tv", { with_networks: 213 });
      setMovie(
        json.results[Math.floor(Math.random() * json.results.length - 1)]
      );
    };
    fetchBannerMovie();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${generateImageUrl(
          movie?.backdrop_path || "",
          ImageSizes.backdrop
        )})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner__cover" />
    </div>
  );
};

export default Banner;
