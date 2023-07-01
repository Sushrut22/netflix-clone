import React from "react";

import tmdbApi from "../src/api/tmdb";
import Cards from "../src/components/Cards";

const Slider = ({ mediaType, title, path, params = {}, isLarge }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const json = await tmdbApi.get(path, params);
      setItems(json.results);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="media-slider">
      <h3 className="media-slider__title">{title}</h3>
      <div className="media-slider__cards">
        {items.map((media) => (
          <Cards
            isLarge={isLarge}
            key={media.id}
            media={media}
            mediaType={media.media_type || mediaType}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
