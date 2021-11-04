import React from "react";
import userrequest from "../Request";
import Banner from "./Banner";
import "./homescreen.css";
import Nav from "./Nav";
import Row from "./Row";
function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        isLargeRow
        fetchURL={userrequest.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={userrequest.fetchTrending} />
      <Row title="Top Rated" fetchURL={userrequest.fetchTopRated} />
      <Row title="Horror" fetchURL={userrequest.fetchHorrorMovies} />
      <Row title="Action" fetchURL={userrequest.fetchActionMovies} />
      <Row title="Documentaries" fetchURL={userrequest.fetchDocumentaries} />
      <Row title="Romantic" fetchURL={userrequest.fetchRomanticMovies} />
    </div>
  );
}

export default Homescreen;
