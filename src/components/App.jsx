import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./Header/Header'));
const Movies = lazy(() => import('./../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const Spinner = lazy(() => import('./Spinner/Spinner'));
const Home = lazy(() => import('./../pages/Home/Home'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div> Loading...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<Home />} />
          {/* <Spinner /> */}
        </Routes>
      </Suspense>
    </>
  );
};
