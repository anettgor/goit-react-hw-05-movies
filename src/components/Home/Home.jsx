import React from 'react';
import { useEffect, useState } from 'react';
import FetchData from './../../utils/fetchMovies';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
function HomePage() {
  const [movies, setMovies] = useState([]);
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await FetchData(URL);
      console.log(detailsResults.results);
      setMovies(detailsResults.results);
    };
    getDetails();
  }, [URL]);

  return (
    <>
      <h1 className={css.heading}>Trending today</h1>
      <ul className={css.listContainer}>
        {movies.map(movie => {
          return (
            <Link
              style={{
                color: 'unset',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              to={`/movies/${movie.id}`}
            >
              <li className={css.li} key={movie.id}>
                {movie.title || movie.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;
