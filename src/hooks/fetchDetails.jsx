import { useState, useEffect } from 'react';
import fetchDetails from './../utils/fetchMovies';
import PropTypes from 'prop-types';

const UseDetails = url => {
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

UseDetails.propTypes = {
  url: PropTypes.string,
};

export default UseDetails;
