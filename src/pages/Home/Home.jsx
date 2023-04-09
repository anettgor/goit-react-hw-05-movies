import React from 'react';
import { useState, useEffect } from 'react';
// import fetchTrending from './../../hooks/FetchTrending';
import FetchData from './../../utils/fetchMovies';
import Spinner from './../../components/Spinner/Spinner';
import css from './Home.module.css';
import { Link } from 'react-router-dom';
function HomePage() {
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;
  // const { isLoading, error, movies } = fetchTrending(URL);
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await FetchData(URL);
      console.log(detailsResults.results);
      setMovies(detailsResults.results);
      setIsLoading(false);
    };
    getDetails();
  }, [URL]);

  // if (error) {
  //   console.warn('Error fetching trends');
  // }

  return (
    <div>
      <h1 className={css.heading}>Trending today</h1>
      {isLoading && <Spinner />}
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
    </div>
  );
}
export default HomePage;
