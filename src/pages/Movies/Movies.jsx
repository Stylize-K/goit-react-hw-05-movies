import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/apiService';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import toast from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  //Виконуємо запит при кожній зміні query
  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        const data = await fetchMovies(query);
        setMovies([...data.results]);
        console.log(data.results);
        if (!data.results.length) {
          return toast.error(
            'Sorry, there are no movies matching your search query. Please try again'
          );
        }
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
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
