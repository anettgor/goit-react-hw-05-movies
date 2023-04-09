import { useState, useEffect } from 'react';
import fetch from './../utils/fetchMovies';

const useCast = url => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      const res = await fetch(url);
      setCast(res.cast);
      setTimeout(() => setIsLoading(false), 1500);
    };

    fetchCast();
  }, [url]);

  return { isLoading, cast };
};

export default useCast;
