import { useParams } from 'react-router-dom';
import { fetchCast } from '../../services/apiService';
import { useState, useEffect } from 'react';
import { List } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  //Робимо запит при кожній зміні movieId
  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;
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

  //Лінк на картинку-заглушку для актора
  const defaultActorImg =
    'https://hanover-twp.org/images/uploads/10-07-2019_9-53-26_official-icon.jpg';

  return (
    <div>
      {!cast.length && <p>No cast information for this movie...</p>}
      <List>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultActorImg
                }
                alt={actor.name}
                width={200}
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </List>
    </div>
  );
};
