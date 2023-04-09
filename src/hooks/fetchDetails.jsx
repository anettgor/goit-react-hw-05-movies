import { useState, useEffect } from 'react';
import fetchDetails from './../utils/fetchMovies';

const useDetails = url => {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetchDetails(url);
      setDetails(res);
      setIsLoading(false);
    };

    fetchMovie();
  }, [url]);

  return { isLoading, details };
};

export default useDetails;
