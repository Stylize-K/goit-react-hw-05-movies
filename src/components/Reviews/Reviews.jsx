import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/apiService';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReviews(movieId);
        setReviews([...data.results]);
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
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
