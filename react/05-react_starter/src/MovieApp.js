import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieApp.css";

function MovieApp(props) {
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoaing] = useState(true);
  const url = `https:yts.mx/api/v2/list_movies.json?mininum_rating=8&sort_by=year`;
  const getMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const moviesArr = data.data.movies;
    setmovies(moviesArr);
    setIsLoaing(false);
    // setIsLoaing(true);
    // console.log(moviesArr);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      {isLoading ? (
        <div className="loader">
          <span>Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </div>
  );
}

export default MovieApp;
