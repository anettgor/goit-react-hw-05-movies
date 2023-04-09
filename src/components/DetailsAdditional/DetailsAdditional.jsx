import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LinkInfo } from './DetailsAdditional.styled';
import css from './DetailsAdditional.module.css';
import Spinner from './../Spinner/Spinner';

const DetailsAdditional = () => {
  return (
    <div className={css.info}>
      <h3 className={css.heading}>Additional information</h3>
      <ul className={css.infoLinks}>
        <li className={css.infoBtn}>
          <LinkInfo to="cast">See Cast</LinkInfo>
        </li>
        <li className={css.infoBtn}>
          <LinkInfo to="reviews">Reviews</LinkInfo>
        </li>
      </ul>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default DetailsAdditional;
