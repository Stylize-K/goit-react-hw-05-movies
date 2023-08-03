import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/apiService';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Loader } from '../../components/Loader/Loader';
import { ColorRing } from 'react-loader-spinner';
import toast from 'react-hot-toast';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParam] = useSearchParams();
  const query = searchParam.get('searchQuery');

  //Виконуємо запит при кожній зміні query
  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(query);
        setMovies([...data.results]);
        if (!data.results.length) {
          return toast.error(
            'Sorry, there are no movies matching your search query. Please try again'
          );
        }
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
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
      <SearchForm />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
