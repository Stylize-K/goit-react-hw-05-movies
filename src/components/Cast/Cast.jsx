import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/apiService';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);
        setCast([...data.cast]);
      } catch (error) {
        console.log('Error', error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={150}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
