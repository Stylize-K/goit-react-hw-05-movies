import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Movies = () => {
  const [dogs, useDogs] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: evt.target.value });
  };

  const vidibleDogs = dogs.filter(dog => dog.includes(dogId));

  useEffect(() => console.log(useDogs), [useDogs]);

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <button onClick={() => setSearchParams({ dogId: dogId })}>Set SP</button>
      {vidibleDogs.map(movie => {
        return (
          <Link key={movie} state={{ from: location }} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
