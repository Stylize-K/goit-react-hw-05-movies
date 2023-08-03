import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, Ul, Li, Img, P } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  //Лінк на картинку-заглушку фільму
  const defaultMovieImg =
    'https://mishanonoo.com/cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_500x750_crop_center.gif';

  return (
    <Ul>
      {movies.map(movie => (
        <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
          <Li key={movie.id}>
            <Img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultMovieImg
              }
              alt={movie.title}
            />
            <P>{movie.title}</P>
          </Li>
        </StyledLink>
      ))}
    </Ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
