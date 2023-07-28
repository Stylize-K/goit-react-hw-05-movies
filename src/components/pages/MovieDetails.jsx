import { useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  return (
    <>
      <h1>MovieDetails page - {movieId}</h1>;
      <Link to={backLinkLocationRef.current}>Вернуться назад</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
