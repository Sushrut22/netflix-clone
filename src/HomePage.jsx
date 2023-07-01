import React from "react";

import Header from "../src/Header";
import Banner from "../src/Banner";
import Slider from "../src/Slider";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Slider
        mediaType="tv"
        title="NETFLIX ORIGINALS"
        path="/discover/tv"
        params={{ with_networks: 213 }}
        isLarge
      />
      <Slider title="TRENDING NOW" path="/trending/all/week" />
      <Slider mediaType="movie" title="TOP RATED" path="/movie/top_rated" />
      <Slider
        mediaType="movie"
        title="ACTION MOVIES"
        path="/discover/movie"
        params={{ with_genres: 28 }}
      />
    </div>
  );
}

export default HomePage;
