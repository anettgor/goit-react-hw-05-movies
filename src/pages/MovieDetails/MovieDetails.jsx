import { useParams, useNavigate } from 'react-router-dom';
import Spinner from './../../components/Spinner/Spinner';
import UseDetails from './../../hooks/fetchDetails';
import css from './MovieDetails.module.css';
import api from './../../utils/api';
import Additional from './../../components/DetailsAdditional/DetailsAdditional';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const URL = `${api.baseurl}movie/${movieId}?api_key=${api.key}&language=en-US`;
  const { isLoading, details } = UseDetails(URL);

  return (
    <div className={css.mainContainer}>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>

      {isLoading && <Spinner />}

      {details && (
        <div className={css.container}>
          <img
            className={css.image}
            src={`${api.imgurl}${details.poster_path}`}
            alt={details.title}
          />
          <div className={css.detailsBox}>
            <div>
              <h1 className={css.heading}>
                {details.title}
                <span>
                  {' '}
                  ({details.release_date && details.release_date.slice(0, 4)})
                </span>
              </h1>
              <p>
                <span className={css.score}>User Score: </span>
                {Math.round(details.vote_average * 10)}%
              </p>
            </div>

            <div>
              <h3 className={css.heading}>Overview</h3>
              <p className={css.overview}>{details.overview}</p>
            </div>
            <div>
              <h3 className={css.heading}>Genres</h3>
              <ul className={css.genresContainer}>
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
      <Additional />
    </div>
  );
}
