import { useState, useEffect } from 'react';
import fetchReviews from './../utils/fetchMovies';
import PropTypes from 'prop-types';

const UseReviews = url => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const reviewsResults = await fetchReviews(url);
      console.log(reviewsResults.results);
      setReviews(reviewsResults.results);
      setIsLoading(false);
    };
    getReviews();
  }, [url]);

  return { isLoading, reviews };
};

UseReviews.propTypes = {
  url: PropTypes.string,
};

export default UseReviews;
