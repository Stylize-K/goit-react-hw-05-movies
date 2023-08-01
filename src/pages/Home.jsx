import { useEffect, useState } from 'react';
import { fetchTrends } from '../services/apiService';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrends();
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Tranding Today</h1>
      <MoviesList movies={movies} />
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
    </>
  );
};

export default Home;
