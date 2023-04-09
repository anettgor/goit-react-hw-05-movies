import { useParams } from 'react-router-dom';
import css from './Review.module.css';
import Spinner from './../../components/Spinner/Spinner';
import UseReviews from './../../hooks/fetchReviews';
function Reviews() {
  const { movieId } = useParams();
  const key = '7bfaca5914dfe808eee9ce7ecac1ff40';
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`;
  const { isLoading, reviews } = UseReviews(URL);

  return (
    <>
      {isLoading && <Spinner />}

      {reviews.length === 0 ? (
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
      )}
    </>
  );
}

export default Reviews;
