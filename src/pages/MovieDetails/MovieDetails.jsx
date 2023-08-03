import { useRef, useEffect, useState } from 'react';
import { fetchMovie } from '../../services/apiService';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieContainer,
  BackLink,
  LinkInfo,
  List,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();

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

  return (
    <>
      <BackLink to={backLinkLocationRef.current}> ↩ Go back</BackLink>
      <MovieContainer>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={250}
        />
        <div>
          <h1>{movie.title}</h1>
          <p>
            User scores: <b>{Math.round(movie.vote_average * 10)}%</b>
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
        </div>
      </MovieContainer>
      <p>Additional information</p>
      <List>
        <li>
          <LinkInfo to="cast">Cast</LinkInfo>
        </li>
        <li>
          <LinkInfo to="reviews">Reviews</LinkInfo>
        </li>
      </List>
      <Outlet />
    </>
  );
};

export default MovieDetails;
