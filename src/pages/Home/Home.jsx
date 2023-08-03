import { useEffect, useState } from 'react';
import { fetchTrends } from '../../services/apiService';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';
import { Title } from './Home.styled';
import { Loader } from '../../components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //При завантаженні сторінки виконуємо запит інформації про популярні фільми на сьогодні
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
      <Title>Tranding Today</Title>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
