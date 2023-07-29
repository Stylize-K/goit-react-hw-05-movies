import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/apiService';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovies(query);
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <form autoComplete="off">
        <input
          type="text"
          placeholder="enter a query"
          name="query"
          onChange={updateQueryString}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link
                key={movie.id}
                state={{ from: location }}
                to={`${movie.id}`}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
