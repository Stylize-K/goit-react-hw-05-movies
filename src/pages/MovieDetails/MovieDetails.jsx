import { useRef, useEffect, useState } from 'react';
import { fetchMovie } from '../../services/apiService';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { Loader } from '../../components/Loader/Loader';

import {
  MovieContainer,
  BackLink,
  LinkInfo,
  List,
  Img,
  ImgWrp,
  InfoWrp,
  AdditionalWrp,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  //Виконуємо запит при кожній зміні movieId
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovie(movieId);
        setMovie(data);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  //Лінк на картинку-заглушку фільму
  const defaultMovieImg =
    'https://mishanonoo.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_500x750_crop_center.gif';

  return (
    <>
      {isLoading && (
        <Loader>
          <ColorRing
            visible={true}
            height="180"
            width="180"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </Loader>
      )}
      <BackLink to={backLinkLocationRef.current}> ↩ Go back</BackLink>
      <MovieContainer>
        <ImgWrp>
          <Img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultMovieImg
            }
            alt={movie.title}
            width={360}
          />
        </ImgWrp>

        <InfoWrp>
          <h1>{movie.title}</h1>
          <p>
            User scores: <b>{Math.round(movie.vote_average * 10)}%</b>
          </p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
        </InfoWrp>
      </MovieContainer>
      <AdditionalWrp>
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
      </AdditionalWrp>
    </>
  );
};

export default MovieDetails;
