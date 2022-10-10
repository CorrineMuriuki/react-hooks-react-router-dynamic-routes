import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const renderMovies = object.keys(movies).map((movieId) => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieId].title}</Link>
    </li>
  ));

  return <ul>{renderMovies}</ul>;
}

export default MoviesList;