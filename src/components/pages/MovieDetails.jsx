import { useRef, useEffect, useState } from 'react';
import { fetchMovie } from '../../services/apiService';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  console.log(movie.genres);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Вернуться назад</Link>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={250}
      />
      <p>
        User scores: <b>{movie.vote_average * 10}%</b>
      </p>
      <h2>Overview</h2>
      <p>{movie.overview}</p>
      {/* <h2>Genres</h2>
      {movie} &&{' '}
      {movie.genres.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))} */}
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
