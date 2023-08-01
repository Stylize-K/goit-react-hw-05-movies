import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, Ul, Li, Img, P } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Ul>
      {movies.map(movie => (
        <Li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={250}
            />
            <P>{movie.title}</P>
          </StyledLink>
        </Li>
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
