import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, Ul, Li, Img, P } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  // const defaultImg =
  //   '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
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
            {/* <Img
              src={
                movieData.poster_path ?
                [<https://image.tmdb.org/t/p/w500/${movieData.poster_path}>](<https://image.tmdb.org/t/p/w500/$%7BmovieData.poster_path%7D>) : defaultImg
                }
                width={250}
                alt="poster"
                /> */}

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
