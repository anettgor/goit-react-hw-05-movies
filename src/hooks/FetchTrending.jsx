import { useState, useEffect } from 'react';
import fetchMovies from './../utils/fetchMovies';

const Trending = url => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await fetchMovies(url);
      setMovies(detailsResults.results);
      setIsLoading(false);
    };

    getDetails();
  }, [url]);

  return { isLoading, movies };
};

export default Trending;
