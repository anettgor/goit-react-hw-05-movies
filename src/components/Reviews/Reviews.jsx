import { useParams } from 'react-router-dom';
import css from './Review.module.css';
import { useState, useEffect } from 'react';
import FetchData from './../../utils/fetchMovies';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`;

  useEffect(() => {
    const getReviews = async () => {
      const reviewsResults = await FetchData(URL);
      console.log(reviewsResults.results);
      setReviews(reviewsResults.results);
    };
    getReviews();
  }, [URL]);

  return reviews.length === 0 ? (
    <p>No reviews found</p>
  ) : (
    <div>
      <h2 className={css.mainHeading}>{reviews.length} Reviews</h2>
      <ul className={css.container}>
        {reviews.map(review => {
          return (
            <li key={review.id} className={css.review}>
              <h4 className={css.heading}>{review.author}</h4>

              <p className={css.text}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Reviews;
