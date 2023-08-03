import { useRef, useEffect, useState } from 'react';
import { fetchMovie } from '../../services/apiService';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieContainer,
  BackLink,
  LinkInfo,
  List,
  Img,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  //Виконуємо запит при кожній зміні movieId
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

  //Лінк на картинку-заглушку фільму
  const defaultMovieImg =
    'https://mishanonoo.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_500x750_crop_center.gif';

  return (
    <>
      <BackLink to={backLinkLocationRef.current}> ↩ Go back</BackLink>
      <MovieContainer>
        <Img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultMovieImg
          }
          alt={movie.title}
          width={300}
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
      <h3>Additional information</h3>
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
