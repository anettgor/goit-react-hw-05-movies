// import fetchTrending from './../../utils/fetchMovies';
import { useState } from 'react';
import fetchData from './../../utils/fetchMovies';
import { Notify } from 'notiflix';
import { Link, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
// import Spinner from './../Spinner/Spinner';
function Movies() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;

  const handleSubmit = async e => {
    e.preventDefault();
    const movieQuery = await fetchData(URL);
    const res = [...movieQuery.results];
    let resultHolder = [];
    if (res && res.length !== 0) {
      res.map(movie =>
        resultHolder.push({ title: movie.title || movie.name, id: movie.id })
      );
      setResults(resultHolder);
      updateQueryString(query);
    } else {
      Notify.info('No movies match your query. Try again');
    }
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleChange}
        ></input>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>

      <ul className={css.listContainer}>
        {results &&
          results.map(result => {
            return (
              <Link
                style={{
                  color: 'unset',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                to={`/movies/${result.id}`}
              >
                <li className={css.li} key={result.id}>
                  {result.title}
                </li>
              </Link>
            );
          })}
      </ul>
    </>
  );
}

export default Movies;
