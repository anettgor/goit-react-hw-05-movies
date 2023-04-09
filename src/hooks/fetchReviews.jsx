import { useState, useEffect } from 'react';
import fetchReviews from './../utils/fetchMovies';

const useReviews = url => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsResults = await fetchReviews(url);
      setReviews(reviewsResults.results);
      setIsLoading(false);
    };
    getReviews();
  }, [url]);

  return { isLoading, reviews };
};

export default useReviews;
