import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import placeholder from './../../images/placeholder.jpg';
import Spinner from './../../components/Spinner/Spinner';
import useCast from './../../hooks/fetchCast';
function Cast() {
  const { movieId } = useParams();
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`;
  const { isLoading, cast } = useCast(URL);

  return (
    <ul className={css.gallery}>
      {isLoading && <Spinner />}
      {!isLoading && cast.length === 0 && 'No cast found'}

      {!isLoading &&
        cast.length > 0 &&
        cast.map(castMember => {
          return (
            <li key={castMember.id}>
              {castMember.profile_path === null ? (
                <img alt={`Profile of ${castMember.name}`} src={placeholder} />
              ) : (
                <img
                  alt={`Profile of ${castMember.name}`}
                  src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                />
              )}

              <p>{castMember.name}</p>
              <p>Character: {castMember.character}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
