import { useEffect, useState } from 'react';
import fetchData from './../../utils/fetchMovies';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import placeholder from './../../images/placeholder.jpg';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `
https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`;

  useEffect(() => {
    const fetchCast = async () => {
      const res = await fetchData(URL);
      console.log(res);
      setCast(res.cast);
    };
    fetchCast();
  }, [URL]);
  return (
    <ul className={css.gallery}>
      {cast.length > 0 &&
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
