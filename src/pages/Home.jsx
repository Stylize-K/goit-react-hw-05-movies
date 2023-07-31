import { useEffect, useState } from 'react';
import { fetchTrends } from '../services/apiService';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrends();
        setMovies([...data.results]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Tranding Today</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
