import axios from "../localaxios";
import React, { useEffect, useState } from "react";
import "./banner.css";
import userrequest from "../Request";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(userrequest.fetchNetflixOriginals);
      console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div className="banner_buttons">
          <button>Play</button>
          <button>+ My list</button>
        </div>
        <div className="banner_description">{movie?.overview}</div>
      </div>
      <div className="banner_fade"></div>
    </div>
  );
}

export default Banner;
