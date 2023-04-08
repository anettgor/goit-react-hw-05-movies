import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import Spinner from './../Spinner/Spinner';
import fetchData from './../../utils/fetchMovies';
import css from './MovieDetails.module.css';

// import { Notify } from 'notiflix';
function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState();
  const navigate = useNavigate();

  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetchData(URL);
      console.log(res);
      setDetails(res);
    };

    fetchMovie();
  }, [URL]);

  return (
    <>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          navigate('/movies', { replace: true });
        }}
      >
        Go back
      </button>
      {details && (
        <div className={css.container}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
            alt={details.title}
          />
          <div className={css.details}>
            <h1 className={css.heading}>
              {details.title}
              <span>
                {' '}
                ({details.release_date && details.release_date.slice(0, 4)})
              </span>
            </h1>
            <p>User Score: {Math.round(details.vote_average * 10)}%</p>

            <div>
              <h3 className={css.heading}>Overview</h3>
              <p className={css.overview}>{details.overview}</p>
            </div>
            <div>
              <h3 className={css.heading}>Genres</h3>
              <ul>
                {details.genres.map(genre => (
                  <li key={genre.id} className={css.list}>
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className={css.info}>
        <h3 className={css.heading}>Additional information</h3>
        <ul className={css.infoLinks}>
          <Link to="cast">
            <li className={css.infoBtn}>Cast</li>
          </Link>
          <Link to="reviews">
            <li className={css.infoBtn}>Reviews</li>
          </Link>
        </ul>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default MovieDetails;
