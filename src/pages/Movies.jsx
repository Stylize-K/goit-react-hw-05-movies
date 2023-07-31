import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/apiService';
import { SearchForm } from '../components/SearchForm/SearchForm';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

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
      <SearchForm />
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
